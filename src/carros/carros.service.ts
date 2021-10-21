import { Carros } from './carros.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Controller, HttpService } from '@nestjs/common';
import { Repository } from 'typeorm';
import { AxiosResponse } from 'axios';

@Injectable()
export class CarrosService {
  constructor(
    @InjectRepository(Carros)
    private readonly carrosRepository: Repository<Carros>,
  ) {}

  async listCarros(): Promise<Carros[]> {
    const carros = await this.carrosRepository.find();
    return carros;
  }

  async addCarros(carro:Carros):Promise<Carros>{
    return await this.carrosRepository.save(carro);
  }

  async deleteCarros(id:number){
    return await this.carrosRepository.delete(id);
  }

  async listUserById(id: number): Promise<Carros> {
    return await this.carrosRepository.findOne(id)
  }

  async returntoken(username:string,password:string): Promise<any> {
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
        .then( (response) =>{
          console.log('status code:', response.status);
          return response.data;
        });
    } catch (erro) {
      return { status: erro.message };
    }
  }
}