import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}

  @Get('/profile11')
  getUserProfile(): string {
    return 'user profile!';
  }
}
