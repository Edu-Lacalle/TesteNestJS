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

  // async listUserById(id: number): Promise<Carros> {
  //   return await this.carrosRepository.findByIds(id);
  // }

  async returntoken(): Promise<any> {
    //   const axios: AxiosResponse
    //   const headers = {};
    //   const response = await axios
    //     .request(
    //       'https://ads-stflabs-workplace-api-backend.develop.stefanini.io/login',
    //       {
    //         username: 'bcsantos1',
    //         password: '@Yahoo.com.f8',
    //         language: ''
    //       },
    //       headers,
    //     )
    //     .toPromise();
    //   return response.data;
    const headers = {};
    var axios = require('axios');
    try{
    return await axios
      .post(
        'https://ads-stflabs-workplace-api-backend.develop.stefanini.io/login',
        {
          username: 'bcsantos1',
          password: '@Yahoo.comaaa',
          language: '',
        },
        headers,
      )
      .then(function (response) {
        console.log('status code:', response.status);
        return response.data ;
      });
    }catch(erro){
      return {'status':erro.message}
    }
  }
}
