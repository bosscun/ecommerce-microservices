import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

// Create new logger instance
const logger = new Logger('Main');

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule
  );
  app.listen();
}
bootstrap();
