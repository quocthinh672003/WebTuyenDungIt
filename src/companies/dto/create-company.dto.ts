import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
    @IsNotEmpty({message: 'name is empty'})
    name: string;

    @IsNotEmpty({message: 'address is empty'})
    address: string;

    @IsNotEmpty({message: 'description is empty'})
    description: string;

    @IsNotEmpty({message: 'Logo is empty'})
    logo: string;
}
//dto: data transfer object