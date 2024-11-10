import { IsArray, IsBoolean, IsMongoId, IsNotEmpty } from "class-validator";
import mongoose from "mongoose";

export class CreateSubscriberDto {
    @IsNotEmpty({ message: 'email không được để trống', })
    email: string;

    @IsNotEmpty({ message: 'name không được để trống', })
    name: string;

    @IsNotEmpty({ message: 'skill không được để trống', })
    @IsArray({ message: 'skill không được để trống'})
    skills: string[];

    

}
