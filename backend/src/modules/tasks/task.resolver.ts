import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.entity';

@Resolver('Task')
export class TaskResolver {
  constructor(private service: TaskService) {}

  @Query('tasks')
  findAll() {
    return this.service.findAll();
  }

  @Query('task')
  findById(id: string) {
    return this.service.findById(id);
  }

  @Mutation('createTask')
  create(@Args('task') task: Task) {
    return this.service.save(task);
  }

  @Mutation('updateTask')
  update(@Args('task') task: Task) {
    return this.service.save(task);
  }

  @Mutation('deleteTask')
  remove(@Args('id') id: string) {
    return this.service.remove(id);
  }
}
