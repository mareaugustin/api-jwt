const request = require('supertest');
const app = require('../src/app');

test('Access denied without token', async () => {
  const res = await request(app).get('/api/etudiants');
  expect(res.statusCode).toBe(401);
});
