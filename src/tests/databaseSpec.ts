import supertest from 'supertest';

import server from '../app';

describe('Test server connection', () => {
  it('it expects server to be running', async (): Promise<void> => {
    const request = supertest(server);
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });
});
