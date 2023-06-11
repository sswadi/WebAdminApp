import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';


//this is a class turned into module by attaching @Module
@Module({
  // imports: [UserModule],
  controllers: [AppController, UserController], //loads app controller
  providers: [AppService],
})
export class AppModule {} 

//the entire app.module.ts is just a simple empty class(refer line 12: export class AppModule {}), 
