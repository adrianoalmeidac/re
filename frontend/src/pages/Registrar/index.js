import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './registrar.css';

export default function Registrar(){
    return (
    <div className="registrar-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="logo" />

                <h1>Cadastro</h1>
                <p>Faça seu cadastro, compartilhe sua experiencia de leitura com outros leitores.</p>
            
                <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#0e7be8" />
                        Já possuo cadastro.
                </Link>
            </section>

            <form>
                <input placeholder="Nome" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Senha" />
                <input placeholder="Whatsapp" />

                <div className="input-group">
                    <input placeholder="Cidade" />
                    <input placeholder="UF" style={{ width: 80 }} />
                </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>

        </div>
    </div>
    );
}