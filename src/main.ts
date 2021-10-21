import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  const options = new DocumentBuilder()

    .setTitle('Microservice')

    .setDescription('Teste Rodrigo Corrêa Góes')

    .setVersion('1.0.0')

    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('swagger', app, document);
}
bootstrap();
