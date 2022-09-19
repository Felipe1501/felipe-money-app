const port = 3000;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use('/ola', bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.listen(port, function() {
    console.log(`BACKEND está rodando na porta ${port} homo sapiens!!!`);
});