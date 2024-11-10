import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Public, ResponseMessage, User } from 'src/decorators/customize';
import { IUser } from 'src/users/users.interface';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  @ResponseMessage("create new job")
  create(
    @Body() createJobDto: CreateJobDto,
    @User() user: IUser
  ) {
    return this.jobsService.create(createJobDto,user);
    
  }

  @Public()
  @ResponseMessage("fetch job with paginate")
  @Get()
  findAll(
    @Query('current') current: string,
    @Query('pageSize') limit: string,
    @Query() qs: string
  ) {
    return this.jobsService.findAll(+ current, + limit, qs);
  }

  @Public()
  @ResponseMessage("Fetch a job by id")
  @Get(':id')
  findOne(
    @Param('id') _id: string, 
  ) {
    
    return this.jobsService.findOne(_id);
  }

  @ResponseMessage("update a job")
  @Patch(':id')
  update(
    @Param('id') _id: string, 
    @Body() updateJobDto: UpdateJobDto,
    @User() user: IUser
  ) {
    return this.jobsService.update(_id, updateJobDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user: IUser) {
    return this.jobsService.remove(id, user);
  }
}
