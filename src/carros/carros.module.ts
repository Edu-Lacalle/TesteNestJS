import { CarrosController } from './carros.controller';
import { CarrosService } from './carros.service';
import { Carros } from './carros.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Carros])],
  providers: [CarrosService],
  controllers: [CarrosController],
})
export class CarrosModule {}
