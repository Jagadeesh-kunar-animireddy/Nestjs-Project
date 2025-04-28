import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);;
  app.useGlobalPipes(new ValidationPipe());
  // app.enableCors({
  //   origin: 'http://localhost:3000',
  // });
  app.useStaticAssets(join('D:/nest sqlite curd/nest-sqlite-curd/my-project/out'));
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
