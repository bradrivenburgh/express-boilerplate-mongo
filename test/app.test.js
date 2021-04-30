const supertest = require('supertest');
const app = require('../src/app');

describe('App suite', () => {
  it('GET / responds with 200 and welcome message', () => {
    return supertest(app).get('/').expect(200, 'Welcome to the EXAMPLE API!');
  });
});
