import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCar } from 'react-icons/ai';
import { ImTruck } from 'react-icons/im';
import { FaMotorcycle } from 'react-icons/fa';

export default function Home() {
    return (
        <div className="content-field">
            <div className="container">
                <div className="content collum">
                    <h1>Bem vindo ao Compare Carro</h1>
                    <h2>Você poderá utilizar esse site para descobrir o valor do seu carro. Poderá também compara-lo com outros carros e descobrir qual carro possui melhor valor.</h2>
                    <h2>Comece selecionando o tipo de veículo que deseja obter as informações:</h2>
                    <div className="icon-box">
                        <Link to="/veiculos/carros" className="collum">
                            <AiFillCar className="icon" />
                            <label>Carros</label>
                        </Link>
                        <Link to="/veiculos/motos" className="collum">
                            <FaMotorcycle className="icon" />
                            <label>Motos</label>
                        </Link>
                        <Link to="/veiculos/caminhoes" className="collum">
                            <ImTruck className="icon" />
                            <label>Caminhões</label>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}