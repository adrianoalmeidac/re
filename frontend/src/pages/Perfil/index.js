import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi'
import api from '../../services/api';

import './perfil.css';

import { useState } from 'react';
import Header from '../../Header';

export default function Perfil(){
    const [livros, setLivros] = useState([]);
    const usuarioid = localStorage.getItem('id');

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

    return (
        <div>
            <Header></Header>
            <div className="perfil-container">
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
        </div>
    );
}