const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'A simple CRUD API to manage contacts',
    },
    host: 'cse-341-node-ootv.onrender.com',
    schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);