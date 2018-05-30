import { Get, Controller } from '@nestjs/common';
import { AppService } from './usuario/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }
}
