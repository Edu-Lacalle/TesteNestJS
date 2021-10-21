import { User } from './user.entity';
import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}
  @Get()
  async listUser():Promise<User[]>{
    return this.userService.listUser()
  }
}
