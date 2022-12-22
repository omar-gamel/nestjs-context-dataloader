import { forwardRef, Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { UsersModule } from '../user/users.module';
import { PostDataloader } from './posts.dataloader';

@Module({
  imports: [forwardRef(() => UsersModule)],
  providers: [PostsService, PostsResolver, PostDataloader],
  exports: [PostsService, PostDataloader]
})
export class PostsModule {}
