import { JwtStrategy } from './jwt-strategy';
import { AuthController } from './auth.controller';
import { jwtConstants } from './interfaces/jwt-const';
import { Module, Controller } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports:[
    PassportModule.register({defaultStrategy:'jwt'}),
    JwtModule.register({
      secret: jwtConstants.secret,
    })
],
  providers: [AuthService,JwtStrategy],
  controllers:[AuthController]
})
export class AuthModule {}
