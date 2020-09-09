// IMPORTAÇÕES
const { Schema, model } = require('mongoose');

const veiculoSchema = new Schema({
    valor: String,
    marca: String,
    modelo: String,
    anoModelo: Number,
    combustivel: String,
    codigoFipe: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    mesReferencia: String,
    tipoVeiculo: Number,
    siglaCombustivel: String,
}, {
    timestamps: true
});

module.exports = model('veiculosFavoritos', veiculoSchema);