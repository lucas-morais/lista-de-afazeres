import * as chai from 'chai';
import * as sinon from 'sinon';
import { PrismaClient, Todo } from '@prisma/client';

import todosMock from '../../mocks';
import TodoModel from '../../../model/TodoModel';
import TodoService from '../../../service/TodoService';
import { ICreateTodo } from '../../../interfaces';

const client = new PrismaClient();

const { expect } = chai;

const todoModel = new TodoModel(client);
const todoService = new TodoService(todoModel);

describe('Testa camada de serviço de criação de um afazer', () => {
  let stub: sinon.SinonStub;
  let todo: Todo;
  const newTodo:ICreateTodo = {
    title: 'Limpar casa',
    description: 'Segunda tarefa',
    status: 'ANDAMENTO',
  };
  before(async () => { 
    stub = sinon.stub(todoModel, 'createTodo');
    stub.resolves(todosMock[0]);
    todo = await todoService.createTodo(newTodo);
  });
  after(async () => {
    stub.reset();
  })
  it('deve retornar retornar um objeto', async () => {
    expect(todo).to.be.an('object');
  });
  it('deve conter a propiredade id', async() => {
    expect(todo).to.have.property('id');
  });
  it('deve conter a propiredade title', async() => {
    expect(todo).to.have.property('title');
  });
  it('deve conter a propiredade description', async() => {
    expect(todo).to.have.property('description');
  });
  it('deve conter a propiredade status', async() => {
    expect(todo).to.have.property('status');
  });
  it('deve conter a propiredade createdAt', async() => {
    expect(todo).to.have.property('createdAt');
  });
  it('deve conter a propiredade updatedAt', async() => {
    expect(todo).to.have.property('updatedAt');
  });
});
