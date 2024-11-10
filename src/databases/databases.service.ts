import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Permission, permissionDocument } from 'src/permissions/schemas/permission.schema';
import { Role, RoleDocument } from 'src/roles/schemas/role.schemas';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { UsersService } from 'src/users/users.service';
import { INIT_PERMISSIONS, NAME_ADMIN, NAME_USER } from './sample';

@Injectable()
export class DatabasesService implements OnModuleInit{
    private readonly logger = new Logger(DatabasesService.name);
    constructor(
        @InjectModel(User.name)
        private userModel: SoftDeleteModel<UserDocument>,

        @InjectModel(Permission.name)
        private permissionModel: SoftDeleteModel<permissionDocument>,

        @InjectModel(Role.name)
        private roleModel: SoftDeleteModel<RoleDocument>,

        private configService: ConfigService,
        private userService: UsersService
    ) {}


    async onModuleInit() {
        const isInit = await this.configService.get<string>("IS_INIT");
        

        if(Boolean(isInit)) {
            const countPermissions = await this.permissionModel.count({});
            const countUsers = await this.userModel.count({});
            const countRole = await this.roleModel.count({});
            if(countPermissions === 0) {
                await this.permissionModel.insertMany(INIT_PERMISSIONS);
            }
            
            if(countRole === 0) {
                const getPermissions = await this.permissionModel.find({}).select('_id');
                await this.roleModel.insertMany([
                    {
                        "name": NAME_ADMIN,
                        "description": "Admin thì full quền",
                        "isActive": true,
                        "permissions": getPermissions
                    },
                    {
                        "name": NAME_USER,
                        "description": "Người dùng/Ứng viên sử dụng hệ thống",
                        "isActive": true,
                        "permissions": []
                    }
                ]);
            }

            if(countUsers === 0) {
                const roleAdmin = await this.roleModel.findOne({name: NAME_ADMIN});
                const roleUser = await this.roleModel.findOne({name: NAME_USER});
                
                await this.userModel.insertMany([
                    {
                        "name":"thindz",
                        "email":"thindz@gmail.com",
                        "password": await this.userService.getHashPassword(this.configService.get<string>("PASSWORD_ROLE")),
                        "age": 21,
                        "gender": "male",
                        "address": "mc",
                        "role":roleAdmin?._id
                    },
                    {
                        "name":"admin",
                        "email":"admin@gmail.com",
                        "password": await this.userService.getHashPassword(this.configService.get<string>("PASSWORD_ROLE")),
                        "age": 21,
                        "gender": "male",
                        "address": "citizens",
                        "role":roleAdmin?._id
                    },
                    {
                        "name":"user",
                        "email":"user@gmail.com",
                        "password": await this.userService.getHashPassword(this.configService.get<string>("PASSWORD_ROLE")),
                        "age": 21,
                        "gender": "male",
                        "address": "citizens",
                        "role":roleUser?._id
                    }
                ]);
            }
            if(countPermissions >0 && countRole >0 && countUsers >0) {
                this.logger.log(">>> ALREADY INIT SAMPLE DATA...")
            }
        }

    }

}
