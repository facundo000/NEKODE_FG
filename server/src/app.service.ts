import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'NEKODE Api says hello! Documentation at api/documentation';
  }
}
