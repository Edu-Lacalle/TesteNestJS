import { createUserDTO, idUserDTO, editUserDTO } from './dto/user.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from './user.entity';
import { PassportModule } from '@nestjs/passport';
import { UserService } from './user.service';
import { Controller, Get, Post, Body, Delete, Param, UseGuards, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiCreatedResponse, ApiHeader, ApiOkResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){}

  @ApiOkResponse({ description: 'Lista todos os Usuários' })
  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async listUser():Promise<User[]>{
    return this.userService.listUser()
  }
  @ApiCreatedResponse({ description: 'Cria novo Usuário' })
  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async addUser(@Body() user:createUserDTO){
    return this.userService.addUser(user)
  }

  @ApiCreatedResponse({ description: 'Edita um Usuario' })
  @Put('editar')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  async editCarros(@Body() user:editUserDTO):Promise<User>{
    return this.userService.editUser(user)
  }

  @ApiOkResponse({ description: 'Deleta Usuário com o id fornecido' })
  @ApiBearerAuth('access-token')
  @UseGuards(AuthGuard('jwt'))
  @Delete('/id/:id')
  async deleteUser(@Param() user: idUserDTO){
    return this.userService.deleteUser(user)
  }
}
