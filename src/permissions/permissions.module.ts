import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Permission, permissionSchema } from './schemas/permission.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Permission.name, schema: permissionSchema }])],
  controllers: [PermissionsController],
  providers: [PermissionsService]
})
export class PermissionsModule {}
