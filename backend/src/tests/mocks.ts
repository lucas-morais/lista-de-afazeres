import { Todo } from '@prisma/client';

const todos: Todo[] = [
  {
    id: 1,
    title: 'Minha tarefa',
    description: 'Primeira tarefa',
    status: 'PENDENTE',
    createdAt: new Date('2022-05-20T12:40:42.473Z'),
    updatedAt: new Date('2022-05-20T12:40:42.476Z'),
  },
  {
    id: 2,
    title: 'Limpar casa',
    description: 'Segunda tarefa',
    status: 'ANDAMENTO',
    createdAt: new Date('2022-05-20T12:43:31.354Z'),
    updatedAt: new Date('2022-05-20T12:43:31.355Z'),
  },
  {
    id: 3,
    title: 'Estudar mongoDB',
    description: 'Estudar conteúdo da Trybe',
    status: 'PRONTA',
    createdAt: new Date('2022-05-20T12:44:49.029Z'),
    updatedAt: new Date('2022-05-20T12:44:49.029Z'),
  },
];

export default todos;
