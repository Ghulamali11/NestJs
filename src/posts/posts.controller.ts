import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('post-list')
  postList() {
    return 'Post List';
  }
  @Get('post-add')
  postAd() {
    return 'Post Add';
  }
  @Get('detail')
  postDetail() {
    return 'Post Detail';
  }
  @Post('lists/:id')
  // detailById(@Param('id', ParseIntPipe)id: number): string{
  //     console.log(id, '===')
  //     return "List User" +id
  // }

  //     detailById(@Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE}))
  // id:number):string{
  //     console.log(id, '===')
  //     return "list user" +id
  // }
  detailById(@Query('page', new DefaultValuePipe(10)) page: number): string {
    console.log(page, '===');
    return 'list user' + page;
  }
}
