import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import morgan from 'morgan';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const globalPrefix = 'api';
const defaultPort = 3999;

async function configApp(app: INestApplication) {
  app.use(morgan('dev'));
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const configService = await app.resolve(ConfigService);
  return { port: configService.get('PORT') || defaultPort };
}

function setupDocs(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('games API')
    .setDescription('API to show list of games')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { port } = await configApp(app);
  await setupDocs(app);
  await app.listen(port);
}

bootstrap();
