const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('deve retornar status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('deve retornar mensagem da API', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Servidor rodando!');
  });
});