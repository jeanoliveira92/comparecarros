import React, { useState } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';

// ASSETS
import logo from './assets/logo.png'

export default function TopBar() {
    return (
        <nav>
            <div className="container">
                <div className="nav-logo">
                    <Link to="/">
                        <img src={logo} className="image" alt="logo" />
                    </Link>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/veiculos/carros" className="link">CARROS</Link></li>
                        <li><Link to="/veiculos/motos" className="link">MOTOS</Link></li>
                        <li><Link to="/veiculos/caminhoes" className="link">CAMINHÕES</Link></li>
                    </ul>
                </div>
            </div >
        </nav>);
}