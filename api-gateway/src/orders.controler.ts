import { Controller, Inject, Post, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';

@Controller('orders')
@ApiTags('orders')
export class OrdersControler {
    constructor(
        @Inject('ORDERS_SERVICE') private readonly ordersServiceClient: ClientProxy
    ) { }

    @Post("")
    public async createOrder(@Req() req) {
        const order = {
            key: "value"
        }
        return this.ordersServiceClient.send("create_new_order", order)
    }

}