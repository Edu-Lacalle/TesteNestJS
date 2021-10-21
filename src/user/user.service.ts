import { User } from './user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
  private readonly userRepository:Repository<User>
  ){}
  async listUser():Promise<User[]>{
    const users = await this.userRepository.find()
    return users
  }
}