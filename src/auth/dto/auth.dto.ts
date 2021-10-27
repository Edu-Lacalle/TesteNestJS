import { ApiProperty } from '@nestjs/swagger';

export class userLoginDTO {

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;
}