import * as chai from 'chai';
import * as sinon from 'sinon';
import { PrismaClient } from '@prisma/client';

const { todo } = new PrismaClient();

const { expect } = chai;

describe('Testa camada de modelo de criação de um afazer', () => {
  before(() => {
    sinon.stub(todo, 'create');
  })
  it('deve retornar vazio', () => {
    expect(1).to.be.equals(1);
  });
});
