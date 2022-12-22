import { Module } from '@nestjs/common';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { UsersModule } from './example/user/users.module';
import { PostsModule } from './example/post/posts.module';
import { GraphQLModule } from '@nestjs/graphql';
import { User } from './example/user/user.model';
import { DataloaderService } from './dataLoader/dataloader.service';
import { DataloaderModule } from './dataLoader/dataloader.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    GraphQLModule.forRootAsync({
      imports: [DataloaderModule, UsersModule, PostsModule],
      useFactory: (dataloaderService: DataloaderService) => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        context: async ({ req }) => {
          const currentUser: User = {
            id: 1,
            name: 'John'
          };
          return {
            currentUser,
            loaders: dataloaderService.createLoaders(currentUser)
          };
        }
      }),
      inject: [DataloaderService],
      driver: ApolloDriver
    })
  ],
  providers: []
})
export class AppModule {
  constructor() {}
}
