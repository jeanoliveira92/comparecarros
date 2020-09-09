import React from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';

// PAGINAS
import Index from './pages';
import Veiculos from './pages/veiculos';
import err404 from './pages/404';

import TopBar from "./topbar";


export default function Routing() {
    return (
        
        <BrowserRouter>
            <TopBar />
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/veiculos/:tipo" component={Veiculos} />
                <Route path="*" component={err404} />
            </Switch>
        </BrowserRouter>
    )
}