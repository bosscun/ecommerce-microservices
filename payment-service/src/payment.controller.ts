import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { PaymentService } from './payment.service';
@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {

  }
  @MessagePattern('create_payment')
  public async createPayment(payment : CreatePaymentDto) {
      console.log(payment);
     return this.paymentService.createPayment(payment)
  }

}
