import { userLoginDTO } from './dto/auth.dto';
import { ApiBearerAuth, ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiCreatedResponse({ description: '' })
  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth('access-token')
  async info(@Req() req: Request): Promise<any> {
    let dados = JSON.parse(req['user']);
    console.log(dados);
    return dados;
  }

  @ApiCreatedResponse({ description: 'Endpoint para logar na aplicação e retorna o token' })
  @Post('/login')
   async login(@Body() user:userLoginDTO): Promise<any> {
    return this.authService.login(user);
  }
}