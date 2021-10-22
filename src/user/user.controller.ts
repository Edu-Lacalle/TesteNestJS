import { User } from './user.entity';
import { UserService } from './user.service';
import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}
  @Get()
  async listUser():Promise<User[]>{
    return this.userService.listUser()
  }
  @Post('/login')
  async login(@Body() body): Promise<any> {
    return this.userService.login(body.username,body.password);
  }
  @Post()
  async addUser(@Body() body){
    return this.userService.addUser(body.name,body.password)
  }
  @Delete('/id/:id')
  async deleteUser(@Param() id: number){
    return this.userService.deleteUser(id)
  }
}
