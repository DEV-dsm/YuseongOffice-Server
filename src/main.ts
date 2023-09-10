import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common';
import { configDotenv } from 'dotenv';

configDotenv();
const port = process.env.PORT || 8000;

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle('YuseongOffice-Server')
		.setDescription('유성구청과 함께하는 데이터 리빙랩 프로젝트 - 마을주민자치과')
		.setVersion('0.0.1')
		.addTag('Yuseong')
		.build();
	
	const doc = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup('/doc', app, doc);

	app.enableCors({
		origin: '*',
		methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE']
	});
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
		}),
	);

	await app.listen(port);
}

bootstrap();
