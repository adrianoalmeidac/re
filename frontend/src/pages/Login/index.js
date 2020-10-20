import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './login.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Login(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo" />

                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder="Seu e-mail" />
                    <input type="password" placeholder="Sua senha" />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/registrar">
                        <FiLogIn size={16} color="#0e7be8" />
                        Não tenho cadastro.
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}