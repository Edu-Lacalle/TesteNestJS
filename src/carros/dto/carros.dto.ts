import { ApiProperty } from '@nestjs/swagger';

export class idCarroDTO {
  @ApiProperty()
  id: number;
}

export class createCarroDTO {
  @ApiProperty()
  name: string;
}

export class editCarroDTO extends idCarroDTO {
  @ApiProperty()
  name: string;
}