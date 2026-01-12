import { StatusCodes } from 'http-status-codes';

import { testServer } from '../jest.setup';


describe('Cidades - GetAll', () => {

  it('Buscar todos os registros', async () => {

    const res1 = await testServer
      .post('/cidades')
      .send({ nome: 'Caxias do sul' });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);

    const resBuscada = await testServer
      .get('/cidades')
      .send();
    
    expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
    expect(Number(resBuscada.headers['x-total-count'])).toBeGreaterThan(0);
    expect(resBuscada.body.length).toBeGreaterThan(0);
  });
});
