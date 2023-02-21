import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
require('dotenv').config();

let config: TypeOrmModuleOptions & PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrationsRun: false,
  migrations: ['dist/**/*.entity{.ts,.js}'],

};

switch (process.env.NODE_ENV) {
  case 'test':
    config = {
      ...config,
      migrationsRun: false,
      migrationsTransactionMode: 'each',
      synchronize: false,
      logging: ["query", "error"],
    };
    console.log('config :>> ', config);
    break;
}

export const datasource = new DataSource(config);
export { config };
