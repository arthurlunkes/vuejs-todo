import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.repository.find({ where: { deleted: false } });
  }

  async findUserById(id: string): Promise<User | null> {
    return this.repository.findOne({ where: { id, deleted: false } });
  }

  async createUser(username: string, password: string): Promise<User> {
    const user = this.repository.create({ username, password });
    return this.repository.save(user);
  }

  async deactivateUser(id: string): Promise<User | null> {
    const user = await this.findUserById(id);
    if (user) {
      user.active = false;
      return this.repository.save(user);
    }
    return null;
  }

  async deleteUser(id: string): Promise<User | null> {
    const user = await this.findUserById(id);
    if (user) {
      user.deleted = true;
      return this.repository.save(user);
    }
    return null;
  }

  async reactivateUser(id: string): Promise<User | null> {
    const user = await this.findUserById(id);
    if (user) {
      user.active = true;
      return this.repository.save(user);
    }
    return null;
  }

  async updateUser(
    id: string,
    username: string,
    password: string,
  ): Promise<User | null> {
    const user = await this.findUserById(id);
    if (user) {
      user.username = username;
      user.password = password;
      return this.repository.save(user);
    }
    return null;
  }
}
