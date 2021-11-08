import { OmitType, PartialType, IntersectionType, PickType, ApiProperty } from "@nestjs/swagger";
import { Payment } from "../entities/payment.entity";


export class CreatePaymentDto extends OmitType(Payment, ['id','createdAt', 'updatedAt'] as const) {}
