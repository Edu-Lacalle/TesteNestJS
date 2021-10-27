import { idCarroDTO, createCarroDTO, editCarroDTO } from './dto/carros.dto';
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

  async addCarros(carro:createCarroDTO):Promise<Carros>{
    return await this.carrosRepository.save(carro);
  }

  async editCarros(carro:editCarroDTO):Promise<Carros>{
    return await this.carrosRepository.save(carro);
  }

  async deleteCarros(carro: idCarroDTO){
    return await this.carrosRepository.delete(carro.id);
  }

  async listCarroById(carro: idCarroDTO): Promise<Carros> {
    return await this.carrosRepository.findOne(carro.id)
  }

}