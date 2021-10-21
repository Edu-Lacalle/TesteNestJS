import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { CarrosModule } from './carros/carros.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'Kingbigsadguy123@',
      database: 'nest',
      autoLoadEntities: true,
      synchronize: true,
    }),

    UserModule,
    CarrosModule,
  ],
})
export class AppModule {}
