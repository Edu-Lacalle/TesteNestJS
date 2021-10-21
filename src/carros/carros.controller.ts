import { Carros } from './carros.entity';
import { CarrosService } from './carros.service';
import { Controller, Get } from '@nestjs/common';

@Controller('carros')
export class CarrosController {
  constructor(
    private readonly carrosService:CarrosService
  ){}

  @Get()
  async listCarros():Promise<Carros[]>{
    return this.carrosService.listCarros()
  }

  // @Get('/:id')
  // async listCarroById():Promise<Carros>{
  //   return this.carrosService
  // }

  @Get('/token')
  async token():Promise <any>{
    return this.carrosService.returntoken()
  }

}
