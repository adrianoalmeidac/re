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

    async function handleAlterar(e){
        e.preventDefault();
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
            localStorage.clear();
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return(
        <div className="editar-container">
            <Header></Header>
            <div className="content">
            <h1>Editar Perfil</h1>
            <form onSubmit={handleAlterar}>
                {usuario.map(usuario =>([
                <input placeholder={usuario.nome} value={nome} onChange={e => setNome(e.target.value)} required />,
                <input type="email" placeholder={usuario.email} value={email} onChange={ e => setEmail(e.target.value)} required />,
                <input type="password" placeholder="Digite a nova senha"value={senha} onChange={ e => setSenha(e.target.value)} required />,
                <input placeholder={usuario.whatsapp} value={whatsapp} onChange={ e => setWhatsapp(e.target.value)} required />,
                <div className="input-group">
                    <input placeholder={usuario.cidade} value={cidade} onChange={ e => setCidade(e.target.value)} required />
                    <input style={{ width: 80 }} placeholder={usuario.uf} value={uf} onChange={ e => setUf(e.target.value)} required />
                </div>,
                <button className="button" type="submit">Alterar</button>
                ]))}
            </form>
            </div>
        </div>
    );
}