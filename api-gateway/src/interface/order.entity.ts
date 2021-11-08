import { ApiProperty } from "@nestjs/swagger";

export class CreateOrderDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    totalPrice: number;
    @ApiProperty()
    product: string [];
  }
  