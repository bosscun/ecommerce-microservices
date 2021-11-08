import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentDto {
    @ApiProperty()
    title: string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    price: number;
    @ApiProperty()
    status: boolean;
  }
  