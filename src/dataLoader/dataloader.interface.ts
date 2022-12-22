import { User } from '../example/user/user.model';
import { PostLoaderType, UserLoaderType } from './dataloader.type';


export interface IDataLoaderService {
  createLoaders(current?: User);
}

export interface IDataLoaders {
  userLoader: UserLoaderType;
  postLoader: PostLoaderType
}
