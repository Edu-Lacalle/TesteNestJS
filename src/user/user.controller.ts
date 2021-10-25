import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';
import { UserService } from './user.service';
import { Controller, Get, Post, Body, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  @Get()
  async listUser():Promise<User[]>{
    return this.userService.listUser()
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async addUser(@Body() body){
    return this.userService.addUser(body.name,body.password)
  }
  @Delete('/id/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async deleteUser(@Param() id: number){
    return this.userService.deleteUser(id)
  }
}
