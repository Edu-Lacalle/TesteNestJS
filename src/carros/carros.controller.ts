import { idCarroDTO, createCarroDTO, editCarroDTO } from './dto/carros.dto';
import { AuthGuard } from '@nestjs/passport';
import { Carros } from './carros.entity';
import { CarrosService } from './carros.service';
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags, ApiBearerAuth, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('Carros')
@Controller('carros')
export class CarrosController {
  constructor(private readonly carrosService: CarrosService) {}

  @ApiOkResponse({ description: 'Lista todos os carros' })
  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  async listCarros(): Promise<Carros[]> {
    return this.carrosService.listCarros();
  }

  @ApiOkResponse({ description: 'Retorna o carro com o id fornecido,se existir' })
  @Get('/id/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  async listCarroById(@Param() carro: idCarroDTO): Promise<any> {
    const retorno = await this.carrosService.listCarroById(carro);
    console.log(retorno);
    if (retorno) {
      return retorno;
    } else {
      return { status: 'carro não encontrado' };
    }
  }

  @ApiCreatedResponse({ description: 'Adiciona um carro' })
  @Post('adicionar')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  async addCarros(@Body() carro:createCarroDTO):Promise<Carros>{
    return this.carrosService.addCarros(carro)
  }

  @ApiCreatedResponse({ description: 'Edita um carro' })
  @Put('editar')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  async editCarros(@Body() carro:editCarroDTO):Promise<Carros>{
    return this.carrosService.editCarros(carro)
  }

  @ApiOkResponse({ description: 'Deleta um carro' })
  @Delete('/id/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  async deleteCarros(@Param() carro: idCarroDTO){
    this.carrosService.deleteCarros(carro)
  }
}
