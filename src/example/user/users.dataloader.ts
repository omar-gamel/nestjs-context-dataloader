import { Injectable } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { User } from './user.model';
import { UsersService } from './users.service';
import { deriveMapFromArray } from '../util/mapFromArray';
import { UserLoaderType } from '../../dataLoader/dataloader.type';
import { IDataLoaderService } from '../../dataLoader/dataloader.interface';

@Injectable()
export class UserDataloader implements IDataLoaderService {
  constructor(private readonly userService: UsersService) {}

  public createLoaders() {
    const userLoader: UserLoaderType = new DataLoader<number, User>(async ids => {
      const users = await this.userService.findByIds(ids);
      const postsMap = deriveMapFromArray(users, (user: User) => user.id);
      return ids.map(id => postsMap.get(id));
    });
    return userLoader;
  }
}
