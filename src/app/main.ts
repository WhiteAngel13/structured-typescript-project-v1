import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  HeyNovaExceptionFilter,
  HeyNovaZodValidationPipe,
} from '@heynova/core';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new HeyNovaZodValidationPipe());
  app.useGlobalFilters(new HeyNovaExceptionFilter());
  await app.listen(3000);
};

bootstrap();
