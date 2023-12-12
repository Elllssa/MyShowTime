import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.userService.findAllUsers();
  }

  @Get(':id')
  async getOneUser(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.userService.findUserById(id);
  }

  @Post('new')
  async createUser(
    @Body()
    user,
  ): Promise<User> {
    return this.userService.createUser(user);
  }

  @Put(':id')
  async updateUser(
    @Param('id')
    id: string,
    @Body()
    user,
  ): Promise<User> {
    return this.userService.updateUserById(id, user);
  }

  @Delete(':id')
  async deleteOneUser(
    @Param('id')
    id: string,
  ): Promise<User> {
    return this.userService.deleteUserById(id);
  }
}
