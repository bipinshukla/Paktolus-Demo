import { Controller, Get, UseGuards, Req ,Headers ,Query, Res, Logger  } from '@nestjs/common';
import { AppService } from './app.service';
import { AxiosResponse,Axios } from 'axios';
import { AuthGuard } from '@nestjs/passport'
import { firstValueFrom, lastValueFrom, map, Observable, tap } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService ,private httpService: HttpService,
    private axios :Axios) { }
  @Get()
  getHello(){
    return this.appService.getHello();
  }
  @Get('/login')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) { }

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req)
  }
 
  @Get('/user/profile')
  async googleAuthTest(@Req() req, @Res() res) { 
    let url_ : string  ='/oauth2/v1/tokeninfo?access_token='+req.query.accessToken;
    this.axios = new Axios({baseURL :'https://www.googleapis.com'});
    let response = await this.axios.get(url_ );
    let d_;
    try{
      d_ = JSON.parse(response.data);
    }catch(err){
      d_ = response.data;
    }
    return d_;
  
  }
}