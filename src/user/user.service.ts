import { User } from './user.entity';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async listUser(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async login(username: string, password: string): Promise<any> {
    const headers = {};

    var axios = require('axios');
    try {
      return await axios
        .post(
          'https://ads-stflabs-workplace-api-backend.develop.stefanini.io/login',
          {
            username,
            password,
          },
          headers,
        )
        .then((response) => {
          console.log('status code:', response.status);
          return response.data;
        });
    } catch (erro) {
      return { status: erro.message };
    }
  }

  async addUser(name:string,password:string){
    const user ={
      name:name,
      password:password
    }
    this.userRepository.save(user)
  }

  async deleteUser(id:number){
    this.userRepository.delete(id)
  }
}
