import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersControler } from './orders.controller';
import { ConfigService } from './services/config/config.service';
import { ClientProxyFactory } from '@nestjs/microservices';
import { PaymentControler } from './payment.controller';
@Module({
  imports: [],
  controllers: [AppController, OrdersControler, PaymentControler],
  providers: [
    AppService,
    ConfigService,
    {
      provide: 'ORDERS_SERVICE',
      useFactory: (configService: ConfigService) => {
        const ordersServiceOptions = configService.get('ordersService');
        return ClientProxyFactory.create(ordersServiceOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'PAYMENT_SERVICE',
      useFactory: (configService: ConfigService) => {
        const paymentServiceOptions = configService.get('paymentService');
        return ClientProxyFactory.create(paymentServiceOptions);
      },
      inject: [ConfigService],
    },
    {
      provide: 'PRODUCT_SERVICE',
      useFactory: (configService: ConfigService) => {
        const productServiceOptions = configService.get('productService');
        return ClientProxyFactory.create(productServiceOptions);
      },
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
