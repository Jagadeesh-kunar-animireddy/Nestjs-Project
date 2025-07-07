import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';
import {Response}  from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  handleAll(@Res() res: Response) {
    //D:\nest js fol\nest sqlite curd\nest-sqlite-curd\my-project\out
      res.sendFile(join(__dirname,'../my-app/out'));
      // res.sendFile(join(__dirname, '..', 'public', 'index.html'));
    }
  // res.sendFile(join('D:/Nest JS/Project-1/emloyee111/out'));
}
