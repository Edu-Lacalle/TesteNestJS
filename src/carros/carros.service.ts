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

}