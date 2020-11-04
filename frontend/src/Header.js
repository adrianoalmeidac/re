import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiHome, FiBook, FiUser, FiPlusSquare } from 'react-icons/fi'
import api from './services/api';
import './style.css';
import logoImg from './assets/logo.svg';

export default function Header() {
    const nome = localStorage.getItem('nome');
    const history = useHistory();

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }
    return (
        <header className="header-container">
                <img src={logoImg} alt="Logo" />
                <span>Bem vindo, {nome}</span>
                <div className="nav">
                <Link to="/home" title="Inicio"><button type="button"><FiHome size={18} color="#0e7be8" /></button></Link>
                <Link to="/livro" title="Cadastrar Livro"><button type="button"><FiPlusSquare size={18} color="#0e7be8" /></button></Link>
                <Link to="/perfil" title="Meus compartilhamentos"><button type="button"><FiBook size={18} color="#0e7be8" /></button></Link>
                <Link to="/editar" title="Editar Perfil"><button type="button" title="Editar Perfil"><FiUser size={18} color="#0e7be8" /></button></Link>
                <button onClick={()=> handleLogout()} type="button" title="Sair">
                    <FiLogOut size={18} color="#0e7be8"/>
                </button>
                </div>
        </header>
    );
}