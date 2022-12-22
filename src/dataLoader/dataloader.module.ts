import { Module } from '@nestjs/common';
import { DataloaderService } from './dataloader.service';
import { UsersModule } from '../example/user/users.module';
import { PostsModule } from '../example/post/posts.module';

@Module({
  imports: [UsersModule, PostsModule],
  providers: [DataloaderService],
  exports: [DataloaderService]
})
export class DataloaderModule {}
