import { Controller, Get, Post, Request ,UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthenticatedGuard } from './auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //POST /login route
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req):any{
    return {msg: 'Logged In!'};
  }


  //GET /protected
  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(): string {
    return this.appService.getHello();
  }
}
 