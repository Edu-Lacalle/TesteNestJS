import { jwtConstants } from './interfaces/jwt-const';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConstants.secret,
    });
  }

  public async validate(payload: any): Promise<any> {
    if (!payload) {
      throw new UnauthorizedException();
    }
    return JSON.stringify(payload);
  }
}
