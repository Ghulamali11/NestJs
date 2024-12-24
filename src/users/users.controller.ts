import { Body, Controller, Get , Param, Post, Query } from '@nestjs/common';
import { BlogsService } from 'src/blogs/blogs.service';

@Controller('users')
export class UsersController {
    constructor(private blogService :BlogsService ){

    }

@Get()
userinfo(): string {
    return 'Ghulamali'

}
@Get('history')
history(): object {
    return {id: 1, text: 'ghjhjkfg'}

}
@Post('add-user')
addUser(@Body() record:any): string {
    console.log(record, 'mmm')
    return 'OK ADD USER'

}
@Get('lists/:id')
listUser(@Param() record:any): string {
    return 'List USER' + record.id

}
@Get('list')
listFilterUser(  @Query() record:any): string {
    console.log(record, '===')
    return 'List Query USER' + record.id

}
@Get('version*card')
detailPage(): string {
    return 'Detail' 

}
detailPages(): string {
    return 'Detail' 


}
@Get("blog-list")
async blogList(): Promise<any>{
   return this.blogService.findData()
}
@Post("blog-add")
blogAdd(@Body() record:any){
    this.blogService.create(record)

}
}


