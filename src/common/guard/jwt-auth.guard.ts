import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { BETTER_AUTH } from 'src/modules/auth/better-auth.provider';
import type { BetterAuthInstance } from 'src/modules/auth/better-auth.provider';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(@Inject(BETTER_AUTH) private readonly auth: BetterAuthInstance) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const session = await this.auth.api.getSession({
      headers: request.headers,
    });

    if (!session || !session.user) {
      throw new UnauthorizedException('Unauthorized');
    }

    request.user = session.user;
    return true;
  }
}
