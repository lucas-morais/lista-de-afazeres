import express, { Router } from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import TodoModel from './model/TodoModel';
import TodoService from './service/TodoService';
import TodoController from './controller/TodoController';

export default class App {
  public app = express();

  private router = Router();

  constructor() {
    this.configRouter();
    this.init();
  }

  private configRouter() {
    const client = new PrismaClient();
    const todoModel = new TodoModel(client);
    const todoService = new TodoService(todoModel);
    const todoController = new TodoController(todoService);

    this.router.route('/')
      .post(todoController.createTodo);
  }

  private init() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use('/todo', this.router);
  }

  public start(port: string | number) {
    this.app.listen(Number(port), () => {
      console.log(`app rodando na porta ${port}`);
    });
  }
}
