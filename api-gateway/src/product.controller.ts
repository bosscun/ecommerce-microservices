import { Body, Controller, Get, Inject, Param, Post, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './interface/order.entity';
import { CreateProductDto } from './interface/product.entity';

@Controller('orders')
@ApiTags('orders')
export class OrdersControler {
    constructor(
        @Inject('PRODUCT_SERVICE') private readonly ordersServiceClient: ClientProxy
    ) { }

    @Post("")
    public async createOrder(@Body() product : CreateProductDto) {
      
        return this.ordersServiceClient.send("createProduct", product)
    }
    @Get()
    public async getAllProduct() {

        return this.ordersServiceClient.send("findAllProduct", {})
    }
    @Get()
    public async remove(@Param('id') id: number) {

        return this.ordersServiceClient.send("removeProduct", id)
    }
}
  
