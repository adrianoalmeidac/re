import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiSearch, FiLogOut, FiHome, FiUser, FiBook, FiPlusSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api';
import Header from '../../Header';

import './editar.css';
import Livro from '../Livro';

export default function Editar(){
    const usuarioid = localStorage.getItem('id');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();
    const [usuario, setUsuario] = useState([]);

    useEffect(()=> {
        api.get('usuario', {
            headers: {
                usuario: usuarioid,
            }
        }).then(retorno => {
            setUsuario(retorno.data);
        })
    }, [usuarioid]);

    async function handleAlterar(){

        const data= {
            nome,
            email,
            senha,
            whatsapp,
            cidade,
            uf
        };
        try {
            await api.put('usuario', data, {
                headers: {
                    usuario: usuarioid
                }
            });
            alert('Cadastro Alterado!');
            history.push('/editar');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return(
        <div>
            <Header></Header>
            <div className="editar-container">
            <form onSubmit={handleAlterar}>
                {usuario.map(usuario =>([
                <input placeholder="Nome" value={usuario.nome} onChange={e => setNome(e.target.value)} required />,
                <input type="password" placeholder="Senha" value={usuario.senha} onChange={ e => setSenha(e.target.value)} required />,
                <input placeholder="Whatsapp" value={usuario.whatsapp} onChange={ e => setWhatsapp(e.target.value)} required />,
                <input placeholder="Cidade" value={usuario.cidade} onChange={ e => setCidade(e.target.value)} required />,
                <input placeholder="UF" style={{ width: 80 }} value={usuario.uf} onChange={ e => setUf(e.target.value)} required />,
                
                <button className="button" onClick={() => handleAlterar()} type="button">Alterar</button>
                ]))}
            </form>
            </div>
        </div>
    );
}