import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { deriveMapFromArray } from '../util/mapFromArray';
import { PostsService } from './posts.service';
import { Post } from './posts.model';
import { IDataLoaderService } from '../../dataLoader/dataloader.interface';
import { PostLoaderType } from '../../dataLoader/dataloader.type';

@Injectable()
export class PostDataloader implements IDataLoaderService {
  constructor(private readonly postsService: PostsService) {}

  public createLoaders() {
    const postLoader: PostLoaderType = new DataLoader<number, Post>(async ids => {
      const posts = await this.postsService.findByIds(ids);
      const postsMap = deriveMapFromArray(posts, (post: Post) => post.id);
      return ids.map(id => postsMap.get(id));
    });
    return postLoader;
  }
}
