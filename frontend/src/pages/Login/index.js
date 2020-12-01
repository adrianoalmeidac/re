import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import api from '../../services/api';

import './login.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/livro.png';

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const retorno = await api.post('session', {email, senha});

            localStorage.setItem('id', retorno.data.id);
            localStorage.setItem('nome', retorno.data.nome)
            history.push('/home');
        }catch(err){
            alert('Usuario ou senha invalidos.')
        }

    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Logo" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input placeholder="Seu e-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Sua senha" value={senha} onChange={e => setSenha(e.target.value)} />
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/registrar">
                        <FiLogIn size={16} color="#0e7be8" />
                        Não tenho cadastro.
                    </Link>
                </form>
            </section>
            <img class="livro" src={heroesImg} alt="Heroes" />
        </div>
    );
}