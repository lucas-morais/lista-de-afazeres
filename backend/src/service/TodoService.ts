import { ICreateTodo } from '../interfaces';
import TodoModel from '../model/TodoModel';

export default class TodoService {
  constructor(private model: TodoModel) {}

  public async createTodo(data: ICreateTodo) {
    const todo = this.model.createTodo(data);
    return todo;
  }
}
