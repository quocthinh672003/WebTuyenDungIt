import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company, CompanyDocument } from './schemas/company.schema';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from 'src/users/schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from 'src/users/users.interface';
import aqp from 'api-query-params';
@Injectable()
export class CompaniesService {

  constructor(
    @InjectModel(Company.name) 
    private CompanyModel: SoftDeleteModel<CompanyDocument>
  ) {}

  async create(createCompanyDto: CreateCompanyDto, user:IUser) {
    return this.CompanyModel.create(
      {
        ...createCompanyDto,
        createdBy: {
          _id: user._id,
          email: user.email
        }
      } 
    );  
    //  const company = new this.CompanyModel()
    // return company.save();
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto, user: IUser) {
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return "not found company";
    }
    const updateCompany = await this.CompanyModel.findByIdAndUpdate(
      id, 
      {
        ...updateCompanyDto,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      }, 
      { new: true }
    ); 
    if(!updateCompany) {
      return "not found company";
    }
    return updateCompany;
  }

  async findAll(pageCurent: number, limit: number,qs:string) {
    const { filter, projection, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    let { sort } = aqp(qs); 
    //offset được tính bằng cách lấy số trang hiện tại trừ đi 1 rồi
    // nhân với số lượng bản ghi hiển thị trên mỗi trang
    let offset = (+pageCurent - 1) * (+limit);
    //defaultLimit xác định số lượng bản ghi tối đa trên mỗi trang
    let defaultLimit = +limit ? +limit : 10; 
    const totalItems = (await this.CompanyModel.find(filter)).length; 
    const totalPages = Math.ceil(totalItems / defaultLimit)

    const result = await this.CompanyModel.find(filter) 
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
      meta: { current: pageCurent, //trang hiện tại 
      pageSize: limit, //số lượng bản ghi đã lấy 
      pages: totalPages, //tổng số trang với điều kiện query 
      total: totalItems // tổng số phần tử (số bản ghi) 
      
      },
      result //kết quả query 
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  

  async remove(id: string, user: IUser) {
    if(!mongoose.Types.ObjectId.isValid(id)) {
      return "not found company";
    }
    await this.CompanyModel.updateOne(
      {_id: id},
      {
        deleteBy: {
          _id: id,
          email: user.email
        }
      }
    );
    return this.CompanyModel.softDelete({_id: id});
  }
}
