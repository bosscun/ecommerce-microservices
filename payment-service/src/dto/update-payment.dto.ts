import { OmitType, PartialType } from '@nestjs/swagger';
import { Payment } from 'src/entity/payment.entity';

export class UpdatePaymentDto extends OmitType(Payment, ['id','createdAt', 'updatedAt'] as const) {}
