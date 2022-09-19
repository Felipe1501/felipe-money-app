const port = 3000;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();
const allowCors = require('./cors');

server.use('/ola', bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(allowCors);

server.listen(port, function() {
    console.log(`BACKEND está rodando na porta ${port} homo sapiens!!!`);
});

module.exports = server;