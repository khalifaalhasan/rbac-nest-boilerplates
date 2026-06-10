import { Module } from '@nestjs/common';
import { ReolesService } from './reoles.service';
import { ReolesController } from './reoles.controller';

@Module({
  controllers: [ReolesController],
  providers: [ReolesService],
})
export class ReolesModule {}
