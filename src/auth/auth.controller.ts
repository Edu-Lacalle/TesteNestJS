import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  async info(@Req() req: Request): Promise<any> {
    let dados = JSON.parse(req['user']);
    console.log(dados);
    return dados;
  }

  @Post('/login')
   async login(@Body() body): Promise<any> {
    return this.authService.login(body.username, body.password);
  }
}