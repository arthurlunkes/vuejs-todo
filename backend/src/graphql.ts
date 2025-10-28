
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Task {
    id: string;
    title: string;
    description?: Nullable<string>;
    done?: Nullable<boolean>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
    deletedAt?: Nullable<string>;
}

export abstract class IQuery {
    abstract tasks(): Nullable<Nullable<Task>[]> | Promise<Nullable<Nullable<Task>[]>>;

    abstract task(id: string): Nullable<Task> | Promise<Nullable<Task>>;

    abstract users(): Nullable<Nullable<User>[]> | Promise<Nullable<Nullable<User>[]>>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createTask(title: string, description?: Nullable<string>): Nullable<Task> | Promise<Nullable<Task>>;

    abstract updateTask(id: string, title?: Nullable<string>, description?: Nullable<string>, done?: Nullable<boolean>): Nullable<Task> | Promise<Nullable<Task>>;

    abstract deleteTask(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract createUser(username: string, password: string): Nullable<User> | Promise<Nullable<User>>;

    abstract deleteUser(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract deactivateUser(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract reactivateUser(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;

    abstract updateUser(id: string, username: string, password: string): Nullable<User> | Promise<Nullable<User>>;
}

export class User {
    id: string;
    username: string;
    password?: Nullable<string>;
    active?: Nullable<boolean>;
    deleted?: Nullable<boolean>;
    createdAt?: Nullable<string>;
    updatedAt?: Nullable<string>;
    deletedAt?: Nullable<string>;
}

type Nullable<T> = T | null;
