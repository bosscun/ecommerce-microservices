import { Body, Controller, Inject, Post, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { CreatePaymentDto } from './interface/createPayment.dto';

@Controller('payment')
@ApiTags('payment')
export class PaymentControler {
    constructor(
        @Inject('PAYMENT_SERVICE') private readonly paymentServiceClient: ClientProxy
    ) { }

    @Post()
    public async createPayment(@Body() payment : CreatePaymentDto) {
        return this.paymentServiceClient.send("create_payment", payment)
    }

}