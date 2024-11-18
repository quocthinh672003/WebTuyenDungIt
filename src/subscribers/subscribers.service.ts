import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSubscriberDto } from './dto/create-subscriber.dto';
import { UpdateSubscriberDto } from './dto/update-subscriber.dto';
import { IUser } from 'src/users/users.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Subscriber, SubscriberDocument } from './schemas/subscriber.schemas';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import aqp from 'api-query-params';
import mongoose from 'mongoose';

@Injectable()
export class SubscribersService {
  constructor(
    @InjectModel(Subscriber.name)
    private SubscriberModel: SoftDeleteModel<SubscriberDocument>
  ) { }
  async create(createSubscriberDto: CreateSubscriberDto, user: IUser) {
    const { email, name, skills } = createSubscriberDto;

    const existEmail = await this.SubscriberModel.findOne({ email });
    if (existEmail) {
      throw new BadRequestException('email already exists');
    }

    let newSubscriber = await this.SubscriberModel.create({ 
      email, name, skills,
      createdBy: {
        id: user._id,
        email: user.email
      }
    });
    return {
      _id: newSubscriber._id,
      email: newSubscriber.email
    };
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, population, projection } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.SubscriberModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);


    const result = await this.SubscriberModel.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .select(projection as any)
      .populate(population)
      .exec();


    return {
      meta: {
        current: currentPage, //trang hiện tại
        pageSize: limit, //số lượng bản ghi đã lấy
        pages: totalPages,  //tổng số trang với điều kiện query
        total: totalItems // tổng số phần tử (số bản ghi)
      },
      result
    }
  }

  findOne(id: string) {
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return `not found subscribers`;
    }
    return this.SubscriberModel.findOne({id: id});
  }

  async getSkills(user: IUser) {
    const {email} = user;
    return await this.SubscriberModel.findOne({email}, {skills:1});
  }

  async update( updateSubscriberDto: UpdateSubscriberDto, user: IUser) {
    const updated = await this.SubscriberModel.updateOne({
      email: user.email},{
      ...updateSubscriberDto,
      updatedBy: {
        _id: user._id,
        email: user.email
      }
    },
    { upsert: true}
  );
    return updated

  }

  async remove(id: string, user: IUser) {
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return `not found subscribers`;
    }
    await this.SubscriberModel.updateOne({
      id: id, 
      
      deletedBy: {
        _id: user._id,
        email: user.email
      }
    });
    return this.SubscriberModel.softDelete({
      _id: id
    })

  }
}
