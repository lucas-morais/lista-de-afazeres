import { Todo } from '@prisma/client';

const todos: Todo[] = [
  {
    id: '1212',
    title: 'Minha tarefa',
    description: 'Primeira tarefa',
    status: 'PENDENTE',
    createdAt: Date('2022-05-20T12:40:42.473Z'),
    updatedAt: '2022-05-20T12:40:42.476Z',
  },
  {
    id: '1234',
    title: 'Limpar casa',
    description: 'Segunda tarefa',
    status: 'ANDAMENTO',
    createdAt: '2022-05-20T12:43:31.354Z',
    updatedAt: '2022-05-20T12:43:31.355Z',
  },
  {
    id: '1555',
    title: 'Estudar mongoDB',
    description: 'Estudar conteúdo da Trybe',
    status: 'PRONTA',
    createdAt: '2022-05-20T12:44:49.029Z',
    updatedAt: '2022-05-20T12:44:49.029Z',
  },
];
