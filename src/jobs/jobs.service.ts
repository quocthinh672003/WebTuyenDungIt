import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Job, JobDocument } from './schemas/job.schema';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/users/users.interface';
import { create } from 'domain';
import mongoose, { Types } from 'mongoose';
import aqp from 'api-query-params';

@Injectable()
export class JobsService {

  constructor(
    @InjectModel(Job.name)
    private jobModel: SoftDeleteModel<JobDocument>
  ) {}

  async create(createJobDto: CreateJobDto, user: IUser) {
    
    const newJob = await this.jobModel.create(
      {
        ...createJobDto,
        createdBy: {
          _id: user._id,
          email: user.email
        }
      }

    );

    return {
      _id: user._id,
      createdAt: newJob.createdAt 
         
    }
  }

  async findAll( current: number, limit: number, qs: string) {
    const { filter, projection, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    let { sort } = aqp(qs); 
    //offset được tính bằng cách lấy số trang hiện tại trừ đi 1 rồi
    // nhân với số lượng bản ghi hiển thị trên mỗi trang
    let offset = (+current - 1) * (+limit);
    //defaultLimit xác định số lượng bản ghi tối đa trên mỗi trang
    let defaultLimit = +limit ? +limit : 10; 
    const totalItems = (await this.jobModel.find(filter)).length; 
    const totalPages = Math.ceil(totalItems / defaultLimit)

    const result = await this.jobModel.find(filter) 
    //skip(offset): bỏ qua số lượng bản ghi nhất định từ đầu kết quả
    .skip(offset) 
    //limit(defaultLimit): giới hạn số lượng tài liệu được trả về
    .limit(defaultLimit)
    .sort(sort as any) 
    //populate(population): cho phép bạn lấy dữ liệu từ các tài liệu khác (liên kết) dựa 
    //trên các trường đã định nghĩa trong mô hình.
    .populate(population) 
    //exec(): thực thi truy vấn và trả về một Promise. Điều này cho phép bạn sử dụng await để đợi kết quả.
    .exec();

    return { 
      meta: { current: current, //trang hiện tại 
      pageSize: limit, //số lượng bản ghi đã lấy 
      pages: totalPages, //tổng số trang với điều kiện query 
      total: totalItems // tổng số phần tử (số bản ghi) 
      
      },
      result //kết quả query 
    }
  }

  async findOne(_id: string) {
    if (!mongoose.Types.ObjectId.isValid(_id))
      return `not found job`;

    return  await this.jobModel.findById(_id);
    
  }

  async update(_id: string, updateJobDto: UpdateJobDto, user: IUser) {
    const updateJob = await this.jobModel.updateOne(
      {_id: _id}, 
      {...updateJobDto,
        updatedBy: {
          _id: user._id,
          name: user.name
        }
      }
    );
    return {
      updateJob
    }
  }

  async remove(id: string, user: IUser) {
    const updateJob = await this.jobModel.updateOne(
      {_id: id},
      {
        deletedBy: {
          _id: user._id,
          name: user.name
        }
      }
    )
    return this.jobModel.softDelete(updateJob);
  }
}
