import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { PaymentModule } from './payment.module';

// Create new logger instance
const logger = new Logger('Main');

async function bootstrap() {

  const app = await NestFactory.createMicroservice(PaymentModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3002,
    },
  } as TcpOptions);
  await app.listen();
}
bootstrap();
