import * as DataLoader from 'dataloader';
import { User } from '../example/user/user.model';
import { Post } from '../example/post/posts.model';

export type UserLoaderType = DataLoader<number, User>;
export type PostLoaderType = DataLoader<number, Post>;
