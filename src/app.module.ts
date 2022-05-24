import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AxiosResponse,Axios } from 'axios';
import { UserController} from './users/users.controller'
import { GoogleAuthStrategy } from './auth/auth.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [HttpModule],
  controllers: [AppController , UserController],
  providers: [AppService,GoogleAuthStrategy,Axios],
})
export class AppModule {}
