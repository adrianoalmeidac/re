import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api';

import './perfil.css';

import logoImg from '../../assets/logo.svg';
import { useState } from 'react';

export default function Perfil(){
    const [livros, setLivros] = useState([]);
    const nome = localStorage.getItem('nome');
    const usuarioid = localStorage.getItem('id');
    const history = useHistory();

    useEffect(()=> {
        api.get('busca', {
            headers: {
                usuario: usuarioid,
            }
        }).then(retorno => {
            setLivros(retorno.data);
        })
    }, [usuarioid]);

    async function handleDeleteLivro(livroid) {
        try {
            await api.delete(`livro/${livroid}`,{
                headers: {
                    usuario: usuarioid,
                }
            });

            setLivros(livros.filter(livros => livros.id !== livroid));
        }catch(err){
            alert('Erro ao deletar!');
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="perfil-container">
            <header>
                <img src={logoImg} alt="Logo" />
                <span>Bem vindo, {nome}</span>
                
                <Link className="button" to="/livro">Cadastrar Livro</Link>
                <button onClick={()=> handleLogout()} type="button">
                    <FiPower size={18} color="#0e7be8"/>
                </button>
            </header>
            <h1>Seus livros compartilhados:</h1>
            
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
                    <button onClick={() => handleDeleteLivro(livro.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}