const request = require('supertest');
const { app, server } = require('../index');  // Ajuste o caminho conforme necessário

describe('GET /', () => {
    afterAll((done) => {
        server.close(done);  // Fecha o servidor após os testes
    });

    it('responds with Hello, World!', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /text/)
            .expect(200, 'Hello, World!', done);
    });
});

