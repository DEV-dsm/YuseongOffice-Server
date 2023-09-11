import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			useFactory: async (config: ConfigService) => ({
				type: 'mysql',
				timezone: 'Asiz/Seoul',
				port: config.get<number>('DB_PORT'),
				host: config.get<string>('DB_HOST'),
				username: config.get<string>('DB_USERNAME'),
				password: config.get<string>('DB_PASSWORD'),
				database: config.get<string>('DB_NAME'),
				entities: [ __dirname + '/**/entity/*.js'],
				synchronize: false, 
				logging: false,
				migrations: [__dirname + '/**/migrations/*.js'],
				migrationsTableName: 'migrations',
				autoLoadEntities: true,
			}),
			inject: [ConfigService]
		})
	],
    controllers: [],
    providers: [],
})
export class AppModule {}
