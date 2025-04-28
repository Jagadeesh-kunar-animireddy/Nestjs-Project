import { IsNotEmpty, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Task{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @IsNotEmpty({message:'Title is required'})
    @IsString({message:'Title must be a string'})
    title : string;

    @IsNotEmpty({message:'description is required'})
    @IsString({message:'description must be a string'})
    @Column()
    description : string;

    @IsNotEmpty({message:'status is required'})
    @IsString({message:'status must be a string'})
    @Column()
    status: string;

    @CreateDateColumn()
    createdAt: Date;
    
    @CreateDateColumn()
    updatedAt: Date;
}