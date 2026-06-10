import { Global, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { BetterAuthProvider } from './better-auth.provider';

@Global()
@Module({
  controllers: [AuthController],
  providers: [BetterAuthProvider],
  exports: [BetterAuthProvider],
})
export class AuthModule {}
