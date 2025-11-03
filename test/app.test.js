const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  let server;

  beforeAll(() => {
    server = app.listen(0);
  });

  afterAll(done => {
    server.close(done);
  });

  test('responds 200', async () => {
    const res = await request(server).get('/');
    expect(res.statusCode).toBe(200);
  });

  test('renders HTML', async () => {
    const res = await request(server).get('/');
    expect(res.text).toContain('<!DOCTYPE');
  });
});