import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import api from '../../services/api';

export default function Veiculos(props) {
    const [tipoVeiculos, setTipoVeiculos] = useState(null);
    const [marcas, setMarcas] = useState([]);
    const [modelos, setModelos] = useState([]);
    const [anos, setAnos] = useState([]);
    const [select, setSelect] = useState({
        modelo: true,
        ano: true,
        button: true

    });
    const [veiculos, setVeiculos] = useState([])

    const [inputMarcas, setInputMarca] = useState();
    const [inputModelos, setInputModelos] = useState();
    const [inputAnos, setInputAnos] = useState();

    // RETORNA OS VALORES DOS TPOS DE VEICULOS
    useEffect(() => {
        const tiposdeveiculos = async () => {
            const data = await api.get('/tiposdeveiculos');
            setTipoVeiculos(data.data.tipos);
        }
        tiposdeveiculos();
    }, []);

    // RETORNA OS VALORES DA MARCA VEICULOS
    useEffect(() => {
        const marcaveiculos = async () => {
            const data = await api.get(`/marcas/${props.match.params.tipo}`);
            setMarcas(data.data.marcas);
        }

        if (tipoVeiculos) {
            marcaveiculos();
        }
    }, [tipoVeiculos]);

    // RETORNA OS VALORES DE MODELOS VEICULOS
    useEffect(() => {
        const modeloveiculos = async () => {
            setSelect({ ...select, modelo: true });
            const data = await api.get(`/modelos/${props.match.params.tipo}/${inputMarcas}`);
            setModelos(data.data.modelos);
            console.log(data.data.modelos.length)
            if (data.data.modelos.length > 0)
                setSelect({ ...select, modelo: false });
            setAnos([]);
        }
        modeloveiculos();
    }, [inputMarcas]);



    // RETORNA OS VALORES DE ANOS VEICULOS
    useEffect(() => {
        const anoveiculos = async () => {
            setSelect({ ...select, ano: true, button: true });
            const data = await api.get(`/anos/${props.match.params.tipo}/${inputMarcas}/${inputModelos}`);
            setAnos(data.data.anos);
            if (data.data.anos.length > 0)
                setSelect({ ...select, ano: false });
        }
        anoveiculos();
    }, [inputMarcas, inputModelos]);




    // RETORNA VAZIO SE AINDA NÃO CARREGOU OS TIPOS DE VEICULOS
    if (!tipoVeiculos) {
        return <div></div>;
    }

    // TESTA SE O TIPO ENVIADO POR PARAMETRO É INVÁLIDO. SE NA É CARRO, MOTO OU CAMINHAO
    if (!tipoVeiculos.includes(props.match.params.tipo))
        return (<Redirect to={{ pathname: "/error" }} />);



    // RETORNA A PAGINA
    return (
        <>
            <div className="box-horizontal">
                <h1>COMPARATIVOS DE {props.match.params.tipo}</h1>
            </div>
            <div className="box-grid">
                <select name="marca" id="marca" className="input" onChange={event => setInputMarca(event.target.value)}>
                    <option>Selecione e marca do(a) {props.match.params.tipo.slice(0, -1)}</option>
                    {marcas.map(req => (
                        <option key={req.codigo} value={req.codigo}>{req.nome}</option>
                    ))}
                </select>

                <select name="modelo" id="modelo" className="input"
                    disabled={select.modelo}
                    onChange={event => setInputModelos(event.target.value)}>
                    <option>Selecione o modelo do(a) {props.match.params.tipo.slice(0, -1)}</option>
                    {modelos.map(req => (
                        <option key={req.codigo} value={req.codigo}>{req.nome}</option>
                    ))}
                </select>

                <select name="ano" id="ano" className="input"
                    disabled={select.ano}
                    onChange={event => setInputAnos(event.target.value)}>

                    <option>Selecione o ano do(a) {props.match.params.tipo.slice(0, -1)}</option>
                    {anos.map(req => (
                        <option key={req.codigo} value={req.codigo}>{req.nome}</option>
                    ))}
                </select>

                <button className="button" type="submit" disabled={select.button}>Selecionar {props.match.params.tipo.slice(0, -1)}</button>
            </div>
            <div className="box-card">
                {veiculos.map(req => (

                    <div className="card">
                        ahahahahha
                    </div>
                ))



                }
            </div>
        </>
    );
}