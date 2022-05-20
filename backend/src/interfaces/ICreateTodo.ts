import { Status } from '@prisma/client';

interface ICreateTodo {
  title: string;
  description: string;
  status: Status;
}

export default ICreateTodo;
