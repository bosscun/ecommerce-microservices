import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrdersDto } from "./dto/create-orders.dto";
import { UpdateOrdersDto } from "./dto/update-orders.dto";
import { Orders } from "./entities/orders.entity";

@Injectable()
export class OrdersService {

    constructor(@InjectRepository(Orders) private orderRepository: Repository<Orders>,) { }

     public async createOrder(createOrderDto: CreateOrdersDto) {
        const order = this.orderRepository.create(createOrderDto);
        return this.orderRepository.save(order);
    }

    public findAll() {
        return this.orderRepository.find();
    }

    async cancelOrder(orderId: number) {
        const order = await this.orderRepository.findOne(orderId);
        if (!order) throw new NotFoundException('Order not found!');
        order.status = false;
        return this.orderRepository.save(order);
    }
}