import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { Orders } from '../entities/orders.entity';


export class UpdateOrdersDto {

  id: number;
  status: string;
}
