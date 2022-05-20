import { Status } from '@prisma/client';

interface ICreateTodo {
  id: string;
  title: string;
  description: string;
  status: Status;
}

export default ICreateTodo;
