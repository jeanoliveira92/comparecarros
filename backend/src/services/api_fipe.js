const axios = require('axios');

const api = axios.create({
    baseURL: 'https://parallelum.com.br/fipe/api/v1'
});

module.exports = api;