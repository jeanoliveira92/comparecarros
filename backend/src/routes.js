// IMPORTAÇÕES
const express = require('express');
const { response } = require('express');
const routes = express.Router();

const fipe = require('./controllers/fipeController');

// - GET Listar Tipos de veículos
routes.get('/tiposdeveiculos', fipe.tiposVeiculos);

// - GET Listar Marcas
routes.get('/marcas/:tipo', fipe.marcas);

// - GET Modelos
routes.get('/modelos/:tipo/:marca', fipe.modelos);

// - GET Anos
routes.get('/anos/:tipo/:marca/:modelo', fipe.anos);

// - GET Valor
routes.get('/valor/:tipo/:marca/:modelo/:ano', fipe.valor);

// - POST Comparar veículos (contendo um array com os parametros acima e retornando qual o mais barato e mais caro)
routes.get('/comparar', fipe.comparar);

// - POST Salvar veiculo favorito
routes.post('/favorito', fipe.salvarFavorito);

// // - DELETE Remover veiculo favorito
routes.delete('/favorito', fipe.deletarFavorito);

// // - GET Listar veiculo favorito
routes.get('/favorito', fipe.listarFavorito);

// EXPORTAÇÃO DAS ROTAS
module.exports = routes;