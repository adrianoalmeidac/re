import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Registrar from './pages/Registrar';
import Perfil from './pages/Perfil';
import Livro from './pages/Livro';
import Home from './pages/Home';
import Editar from './pages/Editar';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/registrar" component={Registrar} />
                <Route path="/perfil" component={Perfil} />
                <Route path="/livro" component={Livro} />
                <Route path="/home"  component={Home} />
                <Route path="/editar" component={Editar} />
            </Switch>
        </BrowserRouter>
    );
}