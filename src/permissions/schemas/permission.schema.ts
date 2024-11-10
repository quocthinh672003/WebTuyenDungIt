import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { request } from 'http';
import mongoose, { Date, HydratedDocument } from 'mongoose';
import { Company } from 'src/companies/schemas/company.schema';
import { Job } from 'src/jobs/schemas/job.schema';
//tạo documentation
export type permissionDocument = HydratedDocument<Permission>;
//decorator
@Schema({
  timestamps: true,
})
export class Permission {
  @Prop()
  name: string;

  @Prop()
  apiPath: string;
  
  @Prop()
  method: string;

  @Prop()
  module: string;


  @Prop({ type: Object })
  createdBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Object })
  updatedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Object })
  deletedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Date })
  createdAt: Date;

  @Prop({ type: Date })
  updatedAt: Date;

  @Prop()
  isDeleted: boolean;

  @Prop({ type: Date })
  deletedAt: Date;
}

export const permissionSchema = SchemaFactory.createForClass(Permission);
