import { Module,NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { EmployeeModule } from './employee/employee.module';
import { BlogsService } from './blogs/blogs.service';
import { PostsController } from './posts/posts.controller';
import { AuthMiddleWare} from './middleware/auth';

@Module({
  imports: [EmployeeModule],
  controllers: [AppController, UsersController, PostsController],
  providers: [AppService, BlogsService],
})
// export class AppModule {}


export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleWare)
    .forRoutes('posts')
    // .forRoutes(PostsController)
    // .forRoutes({
    //   path: "posts/post-list", method:RequestMethod.GET
    // })
  }
}
