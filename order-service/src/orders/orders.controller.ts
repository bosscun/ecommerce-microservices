import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateOrdersDto } from './dto/create-orders.dto';
import { UpdateOrdersDto } from './dto/update-orders.dto';
import { Orders } from './entities/orders.entity';
import { OrdersService } from './orders.service';


export class OrdersController {
    constructor(private orderService: OrdersService) {

    }
    @MessagePattern('create_new_order')
    public async createOrder(order : CreateOrdersDto) {
        console.log(order);
        if(order) {
            return this.orderService.createOrder(order)
        }else {
            throw new Error (' Missing order')
        }
      
    }

    @MessagePattern('cancel_order')
    public async cancel(orderId : number) {
        console.log('cancel Order');
        if(!orderId){
            throw new Error('Missing orderID')
        }
        return this.orderService.cancelOrder(orderId)
    }

    @MessagePattern('get_order')
    public async getOrder() {
        return this.orderService.findAll()
    }

}
