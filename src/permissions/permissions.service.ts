import { ConflictException, Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { IUser } from 'src/users/users.interface';
import { Permission, permissionDocument } from './schemas/permission.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { InjectModel } from '@nestjs/mongoose';
import aqp from 'api-query-params';
import mongoose from 'mongoose';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectModel(Permission.name) private permissionModel: SoftDeleteModel<permissionDocument>
  ) {}

  async create(createPermissionDto: CreatePermissionDto, user: IUser) {
    const { name, apiPath, method, module } = createPermissionDto;
    const { email, _id } = user;

    const permissionExists = await this.permissionModel.findOne({ apiPath, module});
    if(permissionExists) {
      throw new ConflictException("permission already exists");
    }

    const newpermission = await this.permissionModel.create({
      name, 
      apiPath, 
      method, 
      module,
      createdBy: { _id, email },
      
    });
    // console.log(newpermission);
    return {
      _id: newpermission?._id,
      createdAt: newpermission?.createdAt,
    };
    

  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, population, projection } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * (+limit);
    let defaultLimit = +limit ? +limit : 10;

    const totalItems = (await this.permissionModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);


    const result = await this.permissionModel.find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
      .select(projection as any)
      .exec();

    return {
      meta: {
        current: currentPage, //trang hiện tại
        pageSize: limit, //số lượng bản ghi đã lấy
        pages: totalPages,  //tổng số trang với điều kiện query
        total: totalItems // tổng số phần tử (số bản ghi)
      },
      result //kết quả query
    }
  }




  findOne(id: string) {
    return this.permissionModel.findById({_id:id}); 
  }

  async update(id: string, updatePermissionDto: UpdatePermissionDto, user: IUser) {
    const {name, apiPath, method, module} = updatePermissionDto
    return await this.permissionModel.updateOne({_id:id}, 
      {name, apiPath, method, module,updatedBy: {
      _id: user._id,
      email: user.email
      }
    });
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found permission';
    }
    await this.permissionModel.updateOne(
      {_id:id}, 
      { deletedBy: {
          _id: user._id,
          email: user.email
        }
      })

    await this.permissionModel.softDelete({_id:id}) 
  }
}
