import { Body, Controller, Get, Inject, Param, Post, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './interface/order.entity';

@Controller('orders')
@ApiTags('orders')
export class OrdersControler {
    constructor(
        @Inject('ORDERS_SERVICE') private readonly ordersServiceClient: ClientProxy
    ) { }

    @Post("")
    public async createOrder(@Body() order : CreateOrderDto) {
      
        return this.ordersServiceClient.send("create_new_order", order)
    }
    @Post(":id/cancelOrder")
    public async cancelOrder(@Param('id') id: number) {

        return this.ordersServiceClient.send("cancel_order", id)
    }
    @Get()
    public async getAllOrder() {

        return this.ordersServiceClient.send("get_order", {})
    }
}