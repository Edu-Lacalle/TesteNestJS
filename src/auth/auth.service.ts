import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    // private readonly jwtService: JwtService,
  ) {}

  async login(username: string, password: string): Promise<any> {
    const headers = {};
    var axios = require('axios');
    try {
      return await axios
        .post(
          'https://ads-stflabs-workplace-api-backend.develop.stefanini.io/login',
          {
            username,
            password,
          },
          headers,
        )
        .then((response) => {
          console.log('status code:', response.status);
          return response.data;
        });
    } catch (erro) {
      return { status: erro.message };
    }
  }
}
