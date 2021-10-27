import { ApiProperty } from '@nestjs/swagger';
import { isNotEmpty, isString } from 'class-validator';

export class createUserDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  password: string;
}

export class idUserDTO {
  @ApiProperty()
  id: number;
}

export class editUserDTO extends idUserDTO {
  @ApiProperty()
  name: string;
}