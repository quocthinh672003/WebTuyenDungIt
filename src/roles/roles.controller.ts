import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ResponseMessage, User } from 'src/decorators/customize';
import { IUser } from 'src/users/users.interface';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @ResponseMessage("Create a new role")
  @Post()
  create(
    @Body() createRoleDto: CreateRoleDto,
    @User() user: IUser
  ) {
    return this.rolesService.create(createRoleDto, user);
  }

  @ResponseMessage("Fetch Permission with role")
  @Get()
  findAll(
    @Query('current') current: string,
    @Query('pageSize') limit: string,
    @Query() qs: string
  ) {
    return this.rolesService.findAll(+current, +limit, qs);
  }

  @ResponseMessage("Fetch a role by id")
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(id);
  }

  @ResponseMessage("Update a role")
  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateRoleDto: UpdateRoleDto, 
    @User() user: IUser
  ) {
    return this.rolesService.update(id, updateRoleDto, user);
  }

  @ResponseMessage("Delete a role")
  @Delete(':id')
  remove(
    @Param('id') id: string,
    @User() user: IUser
  ) {
    return this.rolesService.remove(id,user);
  }
}
