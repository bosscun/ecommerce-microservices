import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersControler } from './orders.controler';
import { ConfigService } from './services/config/config.service';
import { ClientProxyFactory } from '@nestjs/microservices';
@Module({
  imports: [],
  controllers: [AppController, OrdersControler,],
  providers: [AppService, ConfigService, {
    provide: 'ORDERS_SERVICE',
    useFactory: (configService: ConfigService) => {
      const ordersServiceOptions = configService.get('ordersService');
      return ClientProxyFactory.create(ordersServiceOptions);
    },
    inject: [ConfigService],
  },],
})
export class AppModule { }
