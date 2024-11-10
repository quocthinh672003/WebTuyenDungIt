import { Controller, Get, Post, Render, UseGuards,Request } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(

    //khai báo thuộc tính scope: private readonly
    //appService: tên variable
    //AppService: kiểu data
    private readonly appService: AppService,
    private configService: ConfigService,
    private authService: AuthService
  ) {}

  

}
