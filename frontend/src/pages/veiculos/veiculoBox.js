import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AiFillCar } from 'react-icons/ai';
import { ImTruck } from 'react-icons/im';
import { FaMotorcycle } from 'react-icons/fa';

export default function Box() {

    const history = useHistory();

    async function handleLogout(e) {
        e.preventDefault();
        history.push('/user/login');
    }

    return (
        <div className="box-form">
            <Link to="/veiculos/motos" className="collum">
                <FaMotorcycle className="icon" />
                <label>Motos</label>
            </Link>
        </div>
    )
}