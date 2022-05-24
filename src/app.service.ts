import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    if (!req.user) {
      return 'No user found'
    }
    return {
      message: 'Success',
      user: req.user
    }
  }
  getHello() {
    return "Hello world!"
  }
}