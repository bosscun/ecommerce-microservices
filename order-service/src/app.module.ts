import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { OrdersController } from './orders/orders.controller';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `development.env`,
      validationSchema: Joi.object({
        // Database configuration
        DB_NAME: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_POST: Joi.number().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().allow(''),
        DB_DATABASE: Joi.string().required(),

      }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_POST'),
          username: config.get<string>('DB_USERNAME'),
          database: config.get<string>('DB_DATABASE'),
          password: config.get<string>('DB_PASSWORD'),
          entities: [join(__dirname, '**', '*.entity.{ts,js}')],
          synchronize: true,
        };
      },
    }),
    ProductModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
