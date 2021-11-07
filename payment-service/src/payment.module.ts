import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import Joi from 'joi';
import { join } from 'path';
import { PaymentEntity } from './payment.entity';

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
          type: 'postgres',
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
    TypeOrmModule.forFeature([PaymentEntity])
  ],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
