const request = require('supertest');
const { app, server } = require('./index'); // Ensure your index.js exports both app and server

describe('GET /', () => {
    it('responds with Hello, World!', (done) => {
        request(app)
            .get('/')
            .expect('Content-Type', /text/)
            .expect(200, 'Hello, World!', (err, res) => {
                // If there was an error, log it
                if (err) {
                    console.error('Test failed:', err);
                }
                done(err); // Call done with error if any
            });
    });

    afterAll((done) => {
        if (server) {
            server.close(done); // Close the server after tests
        } else {
            done(); // If no server, just call done
        }
    });
});
