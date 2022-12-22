import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDataloader } from './users.dataloader';

@Module({
  imports: [],
  providers: [UsersService, UserDataloader],
  exports: [UsersService, UserDataloader]
})
export class UsersModule {}
