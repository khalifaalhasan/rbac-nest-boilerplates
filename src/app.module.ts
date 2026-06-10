import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { ReolesModule } from './modules/reoles/reoles.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: './.env',
  }), DatabaseModule, ReolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
