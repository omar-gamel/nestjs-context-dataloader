import { Query, Resolver, ResolveField, Parent, Context } from '@nestjs/graphql';
import { Post } from './posts.model';
import { User } from '../user/user.model';
import { IDataLoaders } from '../../dataLoader/dataloader.interface';
import { PostsService } from './posts.service';

@Resolver(Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}
  @Query(() => [Post])
  posts(@Context('loaders') loaders: IDataLoaders): Post[] {
    return this.postsService.findAll();
  }

  @ResolveField('createdBy', () => User)
  getCreatedBy(@Parent() post: Post, @Context('loaders') loaders: IDataLoaders) {
    return loaders.userLoader.load(post.userId);
  }
}
