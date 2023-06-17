import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


//this is a class turned into module by attaching @Module
@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController], //loads app controller
  providers: [AppService],
})
export class AppModule {} 

