// IMPORTAÇÕES
const fipe = require('../services/api_fipe.js');
const Veiculo = require('../models/veiculo');

// CONSTANTES OU BD
const tipos_veiculos = ['carros', 'motos', 'caminhoes'];

// GETTERS
const getMarcas = async tipo => {
    const marcas = await fipe.get(`/${tipo}/marcas`);
    return marcas.data;
}

const getModelos = async (tipo, marca) => {
    const modelos = await fipe.get(`${tipo}/marcas/${marca}/modelos`);
    return modelos.data.modelos;
}

const getAnos = async (tipo, marca, modelo) => {
    const anos = await fipe.get(`${tipo}/marcas/${marca}/modelos/${modelo}/anos`);
    return anos.data;
}

const getValor = async (tipo, marca, modelo, ano) => {
    const anos = await fipe.get(`${tipo}/marcas/${marca}/modelos/${modelo}/anos/${ano}`);
    return anos.data;
}

// VALIDATORS 

const validarTipo = Tipo => {
    if (!tipos_veiculos.includes(Tipo))
        return false;
    return true;
}

const validarMarca = async (tipo, marca) => {
    const marcas = await getMarcas(tipo);

    if (!marcas.some(item => item.codigo == marca))
        return false;
    return true;
}

const validarModelo = async (tipo, marca, modelo) => {
    const modelos = await getModelos(tipo, marca);

    if (!modelos.some(item => item.codigo == modelo))
        return false;
    return true;
}

const validarAno = async (tipo, marca, modelo, ano) => {
    const anos = await getAnos(tipo, marca, modelo);

    if (!anos.some(item => item.codigo === ano))
        return false;
    return true;
}

// ENDPOINTS
module.exports = {
    tiposVeiculos(req, res) {
        return res.status(200).send({ tipos: tipos_veiculos });
    },

    async marcas(req, res) {
        const { tipo } = req.params;

        if (!validarTipo(tipo))
            return res.status(400).send('Tipo de veículo inválido');

        const marcas = await getMarcas(tipo);

        return res.status(200).send({ marcas });
    },

    async modelos(req, res) {
        const { tipo, marca } = req.params;

        if (!validarTipo(tipo))
            return res.status(400).send('Tipo de veículo inválido');

        if (!(await validarMarca(tipo, marca)))
            return res.status(400).send('Marca de veículo inválida');

        const modelos = await getModelos(tipo, marca);

        return res.status(200).send({ modelos });
    },

    async anos(req, res) {
        const { tipo, marca, modelo } = req.params;

        console.log(typeof marca)

        if (!validarTipo(tipo))
            return res.status(400).send('Tipo de veículo inválido');

        if (!(await validarMarca(tipo, marca)))
            return res.status(400).send('Marca de veículo inválida');

        if (!(await validarModelo(tipo, marca, modelo)))
            return res.status(400).send('Modelo de veículo inválido');

        const anos = await getAnos(tipo, marca, modelo);

        return res.status(200).send({ anos });
    },

    async valor(req, res) {
        const { tipo, marca, modelo, ano } = req.params;

        if (!validarTipo(tipo))
            return res.status(400).send('Tipo de veículo inválido');

        if (!(await validarMarca(tipo, marca)))
            return res.status(400).send('Marca de veículo inválida');

        if (!(await validarModelo(tipo, marca, modelo)))
            return res.status(400).send('Modelo de veículo inválido');

        if (!(await validarAno(tipo, marca, modelo, ano)))
            return res.status(400).send('Ano de veículo inválido');

        const anos = await getValor(tipo, marca, modelo, ano);

        return res.status(200).send({ anos });
    },

    async comparar(req, res) {
        const dados = req.body;

        return res.status(200).send({ message: "" });
    },

    async salvarFavorito(req, res) {
        try {
            const dados = req.body;

            console.log(dados);

            // CRIA-SE UM USUARIO VIRTUALMENTE
            const veiculo = new Veiculo({
                valor: "teste",
                marca: "teste",
                modelo: "teste",
                anoModelo: 2000,
                combustivel: "teste",
                codigoFipe: "teste",
                mesReferencia: "teste",
                tipoVeiculo: 2000,
                siglaCombustivel: "teste",
            })

            // SE TUDO OCORRER BEM, USUARIO É SALVO NO BANCO DE DADOS
            await veiculo.save();

            return res.status(200).send({ veiculo });

        } catch (error) {
            console.log(error)
            if (error.code === 11000)
                error.message = "Veículo adicionado previamente";
            res.status(400).send(error.message);
        }
    },

    async deletarFavorito(req, res) {
        const dados = req.body;

        return res.status(200).send({ message: "" });

    },

    async listarFavorito(req, res) {
        const dados = req.body;

        return res.status(200).send({ message: "" });
    },
}