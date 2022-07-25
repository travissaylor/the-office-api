import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [
    // @todo make this async and get values from config
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'alpine',
      database: 'the_office_api',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CharactersModule,
    QuotesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
