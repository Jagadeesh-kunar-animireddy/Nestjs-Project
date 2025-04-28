import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Task } from './task.entity';
@Injectable()
export class TaskService {


    constructor(
        @InjectRepository(Task)
        private taskRepository: Repository<Task>
    ){}

    //get all data
    async getAll(): Promise<Task[]>{
        return await this.taskRepository.find();
    }

    //getone data by id
    async getOne(id:number) : Promise<Task | null>{
        return await this.taskRepository.findOneBy({id});
    }

    //create data
    async create(task: Task) : Promise<Task>{
        return await this.taskRepository.save(task);
    }

    //update data by id
    async update(id:number, task:Task) : Promise<UpdateResult>{
        return await this.taskRepository.update(id,task);
    }

    //delete data by id
    async delete(id:number):Promise<DeleteResult>{
        return await this.taskRepository.delete(id);
    }
}
