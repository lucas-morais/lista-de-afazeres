import { PrismaClient, Todo } from '@prisma/client';
import ICreateTodo from '../interfaces/ICreateTodo';

export default class TodoModel {
  constructor(private client: PrismaClient) {
  }

  public async createTodo(data: ICreateTodo):Promise<Todo> {
    const todo = await this.client.todo.create({ data });
    return todo;
  }
}
