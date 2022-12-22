import { Inject, Injectable } from '@nestjs/common';
import { PostDataloader } from '../example/post/posts.dataloader';
import { User } from '../example/user/user.model';
import { UserDataloader } from '../example/user/users.dataloader';
import { IDataLoaders, IDataLoaderService } from './dataloader.interface';

@Injectable()
export class DataloaderService implements IDataLoaderService {
  constructor(
    @Inject(UserDataloader) private readonly userLoader: IDataLoaderService,
    @Inject(PostDataloader) private readonly postLoader: IDataLoaderService
  ) {}

  createLoaders(currentUser: User): IDataLoaders {
    return {
      userLoader: this.userLoader.createLoaders(),
      postLoader: this.postLoader.createLoaders()
    };
  }
}
