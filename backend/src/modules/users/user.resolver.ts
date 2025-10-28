import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.entity';

@Resolver('User')
export class UserResolver {
  constructor(private service: UserService) {}

  @Query('users')
  async findAll(): Promise<User[]> {
    return this.service.findAllUsers();
  }

  @Query('user')
  async findById(@Args('id') id: string): Promise<User | null> {
    return this.service.findUserById(id);
  }

  @Mutation('createUser')
  async create(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<User> {
    return this.service.createUser(username, password);
  }

  @Mutation('deleteUser')
  async delete(@Args('id') id: string): Promise<User | null> {
    return this.service.deleteUser(id);
  }

  @Mutation('deactivateUser')
  async deactivate(@Args('id') id: string): Promise<User | null> {
    return this.service.deactivateUser(id);
  }

  @Mutation('reactivateUser')
  async reactivate(@Args('id') id: string): Promise<User | null> {
    return this.service.reactivateUser(id);
  }

  @Mutation('updateUser')
  async update(
    @Args('id') id: string,
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<User | null> {
    return this.service.updateUser(id, username, password);
  }
}
