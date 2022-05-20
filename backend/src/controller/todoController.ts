import { NextFunction, Response, Request } from 'express';
import { ICreateTodo } from '../interfaces';
import TodoService from '../service/TodoService';

export default class todoController {
  constructor(private service: TodoService) {

  }

  public createTodo = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const todoData: ICreateTodo = req.body;
      const todo = await this.service.createTodo(todoData);
      return res.status(201).json(todo);
    } catch (err) {
      return next(err);
    }
  };
}
