import { Injectable } from '@nestjs/common';
import { Id } from '@core';

@Injectable()
export class AppService {
  getHello(): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    return 'Hello! ' + Id.generate();
  }
}
