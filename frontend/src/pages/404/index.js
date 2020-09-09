import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import img404 from '../../assets/404_car.png';
import img4042 from '../../assets/404.png';

export default function Home() {
    return (
        <div className="content-field">
            <div className="container">
                <div className="content">
                    <div className="half-block">
                        <img src={img404} />
                    </div>
                    <div className="half-block">
                        <img src={img4042} />
                        <Link to="/">Clique aqui para voltar ao início</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}