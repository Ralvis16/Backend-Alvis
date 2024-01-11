import { expect } from 'chai';
import supertest from 'supertest';
import app from '../src/app.js';

const request = supertest(app);

describe('Pruebas para el enrutador de usuarios', () => {
  it('Debería obtener todos los usuarios', async () => {
    const res = await request.get('/users');
    expect(res.status).to.equal(200);
    expect(res.body).to.deep.equal({ message: 'Obtener todos los usuarios' });
  });

  // Puedes agregar más pruebas para otras rutas y casos
});
