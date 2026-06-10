import { Inject, Injectable } from '@nestjs/common';
import { BETTER_AUTH } from './better-auth.provider';
import type { BetterAuthInstance } from './better-auth.provider';
import { Request, Response } from 'express';
import { toNodeHandler } from 'better-auth/node';

@Injectable()
export class AuthService {
  constructor(@Inject(BETTER_AUTH) private readonly auth: BetterAuthInstance) {}

  handleAuthRequest(req: Request, res: Response) {
    const nodeHandler = toNodeHandler(this.auth);
    return nodeHandler(req, res);
  }

  async getSessionData(req: Request) {
    return await this.auth.api.getSession({
      headers: new Headers(req.headers as Record<string, string>),
    });
  }
}
