// IMPORTAÇÕES
const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');

// ARQUIVO DE CONFIGURAÇÃO
require('dotenv').config();

// ARQUIVO DE ROTAS
const routes = require('./src/routes.js');

// INSTANCIA DO EXPRESS E CONFIGURAÇÃO
const backend = express();

// CONEXÃO COM O BANCO DE DADOS
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// INDICAR AO SERVIDOR O USO DO JSON 
backend.use(express.json());

// HABILITA O ACESSO EXTERNO A API
backend.use(cors());

// ADICIONANDO AS ROTAS AO SERVIDOR
backend.use(routes);

// PORTA DE ACESSO A API
backend.listen(process.env.API_PORT, () => {
    console.log(`Server running on port ${process.env.API_PORT}`);
});