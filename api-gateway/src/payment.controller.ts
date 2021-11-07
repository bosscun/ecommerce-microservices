import { Controller, Inject, Post, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

@Controller('payment')
@ApiTags('payment')
export class PaymentControler {
    constructor(
        @Inject('PAYMENT_SERVICE') private readonly paymentServiceClient: ClientProxy
    ) { }

    @Post("")
    public async createPayment(@Req() req) {
        const order = {
            key: "value"
        }
        return this.paymentServiceClient.send("create_payment", order)
    }

}