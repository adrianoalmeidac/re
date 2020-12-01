import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api';

import './livro.css';

export default function Livro(){
    const usuarioid = localStorage.getItem('id');
    const [nome, setNome] = useState('');
    const [autor, setAutor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [livrosatrocar, setLivrosatrocar] = useState('');
    const history = useHistory();

    async function handleNovoLivro(e){
        e.preventDefault();

        const data = {
            nome,
            autor,
            descricao,
            livrosatrocar
        };

        try{
            await api.post('livro', data, {
                headers: {
                    usuario: usuarioid
                }
            })
            history.push('/perfil');
        }catch(err){
            alert('Erro ao cadastrar livro.');
        }
    }

    return (
        <div className="livro-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="logo" />

                <h1>Compartilhe!</h1>
                <p>Registre o seu livro e compartilhe a sua experiencia de leitura com outros leitores!</p>
            
                <Link className="back-link" to="/perfil">
                        <FiArrowLeft size={16} color="#0e7be8" />
                        Voltar
                </Link>
            </section>

            <form onSubmit={handleNovoLivro}>
                <input
                    placeholder="Livro" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
            />
                <input
                    placeholder="Autor" 
                    value={autor}
                    onChange={e => setAutor(e.target.value)}
            />
                <textarea 
                    placeholder="Descrição"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
            />
                <textarea 
                    placeholder="Livros desejados" 
                    value={livrosatrocar}
                    onChange={e => setLivrosatrocar(e.target.value)}
            />

                <button className="button" type="submit">Cadastrar</button>
            </form>

        </div>
    </div>
    );
}
