import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //appModule(from app.module.ts) is passed as modules are one of the components of nest js(apart from controllers, providers)
  await app.listen(3000);
}
bootstrap();

//the main job of main.ts is to load app modules and start the servers
// The term "bootstrap" refers to the process of initializing the necessary components, 
// configurations, and dependencies required for the application to start running.
