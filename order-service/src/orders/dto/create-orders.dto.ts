import { IntersectionType, OmitType, PartialType, PickType } from "@nestjs/mapped-types";
import { Orders } from "../entities/orders.entity";

export class CreateOrdersDto extends IntersectionType(
    OmitType(PartialType(Orders), ['createdAt', 'updatedAt', 'id']),
    PickType(Orders, ['title'])
    ) {

}