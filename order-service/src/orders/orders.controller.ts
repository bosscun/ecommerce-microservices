import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';


export class OrdersController {
    constructor() {

    }
    @MessagePattern('create_new_order')
    public async createOrder(order) {
        console.log(order);

        return {
            message: "success"
        }
    }

}
