const request = require('supertest');
const { app, server } = require('./index'); 

describe('GET /', () => {
    let shouldCloseServer = false;

    beforeAll((done) => {
        const timeout = setTimeout(() => {
            console.error('Server did not start in time');
            shouldCloseServer = true; 
            done(new Error('Server did not start in time'));
        }, 5000);  

        request(app)
            .get('/')  
            .end((err, res) => {
                clearTimeout(timeout);  
                if (err || res.status !== 200) {
                    console.error('Server is not running properly:', err);
                    shouldCloseServer = true; 
                    return done(new Error('Server is not running properly'));  
                }
                done();  
            });
    });

    it('responds with Hello, World!', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /text/)
            .expect(200, 'Hello, World!', (err, res) => {
                if (err) {
                    console.error('Test failed:', err);
                    shouldCloseServer = true; 
                    return done(err);  
                }
                done();  
            });
    });

    afterAll((done) => {
        if (shouldCloseServer && server) {
            console.log('Closing server due to previous errors...');
            server.close(done); 
        } else {
            done(); 
        }
    });
});
