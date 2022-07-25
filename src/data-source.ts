import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'alpine',
  database: 'the_office_api',
  entities: ['**/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
});
