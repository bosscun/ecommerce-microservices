import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PaymentService } from './payment.service';
@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {

  }
  @MessagePattern('create_payment')
  public async createPayment(order) {
      console.log(order);

      return {
          message: "success"
      }
  }

}
