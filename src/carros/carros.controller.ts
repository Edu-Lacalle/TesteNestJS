import { AuthGuard } from '@nestjs/passport';
import { Carros } from './carros.entity';
import { CarrosService } from './carros.service';
import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiSecurity } from '@nestjs/swagger';

@ApiSecurity('basic')
@Controller('carros')
export class CarrosController {
  constructor(private readonly carrosService: CarrosService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async listCarros(): Promise<Carros[]> {
    return this.carrosService.listCarros();
  }


  @Get('/id/:id')
  @UseGuards(AuthGuard('jwt'))
  async listCarroById(@Param() id: number): Promise<any> {
    const retorno = await this.carrosService.listUserById(id);
    console.log(retorno);
    if (retorno) {
      return retorno;
    } else {
      return { status: 'carro não encontrado' };
    }
  }
  
  @Post('adicionar')
  @UseGuards(AuthGuard('jwt'))
  async addCarros(@Body() body):Promise<Carros>{
    return this.carrosService.addCarros(body.carro)
  }

  @Delete('/id/:id')
  @UseGuards(AuthGuard('jwt'))
  async deleteCarros(@Param() id: number){
    this.carrosService.deleteCarros(id)
  }
}
