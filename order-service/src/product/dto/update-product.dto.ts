import { ApiProperty } from "@nestjs/swagger";

export class UpdateProductDto{
  @ApiProperty()
  id : number
  @ApiProperty()
  title: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: number;
  @ApiProperty()
  image: string;
  @ApiProperty()
  status: boolean;
}