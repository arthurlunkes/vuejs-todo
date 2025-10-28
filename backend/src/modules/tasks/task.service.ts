import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private repository: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Task | null> {
    return this.repository.findOneBy({ id: id });
  }

  save(task: Task): Promise<Task> {
    return this.repository.save(task);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
