import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiSearch, FiLogOut, FiHome, FiUser, FiBook, FiPlusSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api';
import Header from '../../Header';

import './home.css';

export default function Home(){
    const usuarioid = localStorage.getItem('id');

    return(
        
        <div>
            <Header></Header>
            <div className="buscar">
            <input type="text" placeholder="Buscar..."></input><button><FiSearch size={18} color="#0e7be8"/></button>
            </div>

            <div className="livros-container">
            <h1>Livros Encontrados:</h1>
            
            <ul>
            <li key="">
                    <strong>Livro:</strong>
                    <p>Nome</p>
                    <strong>Autor:</strong>
                    <p>Autor</p>
                    <strong>Descrição:</strong>
                    <p>Descricao</p>
                    <strong>Livros desejados:</strong>
                    <p>Livros a trocar</p>
                    <strong>Read Exchanger:</strong>
                    <p>Adriano</p>
                    <strong>E-mail:</strong>
                    <p>adriano@com</p>
                    <strong>Whatsapp:</strong>
                    <p>11969058616</p>
                    <strong>Cidade:</strong>
                    <p>São Paulo</p>
                    <strong>Estado:</strong>
                    <p>SP</p>
                    <button onClick="" type="button">
                        <FaWhatsapp size={20} color="#0e7be8" />
                    </button>
                </li>
            </ul>
            </div>
        </div>
    );
}