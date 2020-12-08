import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiSearch, FiLogOut, FiHome, FiUser, FiBook, FiPlusSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api';
import Header from '../../Header';
import Footer from '../../Footer';

import './home.css';

export default function Home(){
    const usuarioid = localStorage.getItem('id');
    const history = useHistory();
    const [livros, setLivros] = useState([]);
    const ibuscar = localStorage.getItem('buscar')
    const page = 1;

    useEffect(()=> {
        console.log(ibuscar);
        api.get('livro', {
            params: {
                buscar: ibuscar,
            }
        }).then(retorno => {
            setLivros(retorno.data);
        })
    }, [ibuscar]);

    function handleBuscar(){
        const txtbuscar = document.getElementById('txtbuscar').value;
        localStorage.setItem('buscar', txtbuscar);
        const buscar = localStorage.getItem('buscar');
        history.push('/home');
    }
    
    return(
        
        <div>
            <Header></Header>
            <div className="buscar">
            <input id="txtbuscar" type="text" placeholder="Buscar..."></input><button onClick={handleBuscar}><FiSearch size={18} color="#0e7be8"/></button>
            </div>

            <div className="livros-container">
            <h1>Livros Encontrados com o termo: {ibuscar}</h1>
            
            <ul>
            {livros.map(livro => (
            <li key={livro.id}>
                    <strong>Livro:</strong>
                    <p>{livro.nome}</p>
                    <strong>Autor:</strong>
                    <p>{livro.autor}</p>
                    <strong>Descrição:</strong>
                    <p>{livro.descricao}</p>
                    <strong>Livros desejados:</strong>
                    <p>{livro.livrosatrocar}</p>
                    <strong>Read Exchanger:</strong>
                    <p>{livro.re}</p>
                    <strong>E-mail:</strong>
                    <p>{livro.email}</p>
                    <strong>Whatsapp:</strong>
                    <p>{livro.whatsapp}</p>
                    <strong>Cidade:</strong>
                    <p>{livro.cidade}</p>
                    <strong>Estado:</strong>
                    <p>{livro.estado}</p>
                    <a href={'https://wa.me/55' + livro.whatsapp } type="button" target="_blank">
                        <FaWhatsapp size={20} color="#0e7be8" />
                    </a>
                </li>
                ))}
            </ul>
            </div>
            <Footer></Footer>
        </div>     
    );
}