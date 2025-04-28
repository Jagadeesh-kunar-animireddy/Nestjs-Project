import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('task')
export class TaskController {

    constructor(private TaskService : TaskService){}

    @Get()
    async getAll() : Promise<Task[]>{
        return await this.TaskService.getAll();

    }

    @Get(':id')
    async getOne(@Param('id') id:number) : Promise<Task | null>{
        return await this.TaskService.getOne(id);
    }

    @Post()
    async create(@Body() task : Task) : Promise<Task>{
        return await this.TaskService.create(task);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() task: Task) : Promise<UpdateResult>{
        return await this.TaskService.update(id,task)
    }

    @Delete(':id')
    async delete(@Param('id') id:number) : Promise<DeleteResult>{
        return await this.TaskService.delete(id);
    }
}
