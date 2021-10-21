import { Carros } from './carros.entity';
import { CarrosService } from './carros.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('carros')
export class CarrosController {
  constructor(private readonly carrosService: CarrosService) {}

  @Get()
  async listCarros(): Promise<Carros[]> {
    return this.carrosService.listCarros();
  }


  @Get('/id/:id')
  async listCarroById(@Param() id: number): Promise<any> {
    const retorno = await this.carrosService.listUserById(id);
    console.log(retorno);
    if (retorno) {
      return retorno;
    } else {
      return { status: 'carro não encontrado' };
    }
  }

  // @Delete('/:id')
  // async deleteCarroById(@Param() id: number): Promise<any> {
  //   const retorno = await this.carrosService.listUserById(id);
  //   console.log(retorno);
  //   if (retorno) {
  //     return retorno;
  //   } else {
  //     return { status: 'carro não encontrado' };
  //   }
  // }
  
  @Post('adicionar')
  async addCarros(@Body() body):Promise<Carros>{
    return this.carrosService.addCarros(body.carro)
  }

  @Post('/token')
  async token(@Body() body): Promise<any> {
    return this.carrosService.returntoken(body.username,body.password);
  }

  @Delete('/id/:id')
  async deleteCarros(@Param() id: number){
    this.carrosService.deleteCarros(id)
  }
}
