import { Status } from "@prisma/client";

export default interface ICreateTodo {
  id: string;
  title: string;
  description: string;
  status: Status;
}