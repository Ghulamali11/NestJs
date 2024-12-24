import { Controller, Get } from '@nestjs/common';

@Controller('roles')
export class RolesController {

    @Get()
    roleHistory(): string{
        return 'Role history page'
    }
    @Get('demo-page')
    roleDemo(): string{
        return 'Role demo page'
    }

}
