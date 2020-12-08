import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import './registrar.css';
import Footer from '../../Footer';

export default function Registrar(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const history = useHistory();

    async function handleRegistrar(e){
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
            const retorno = await api.post('usuario', data);
            alert(`Cadastro realizado, Obrigado ${retorno.data.nome}!`);
            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }

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
            <form onSubmit={handleRegistrar}>
                <input placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required />
                <input type="email" placeholder="E-mail" value={email} onChange={ e => setEmail(e.target.value)} required />
                <input type="password" placeholder="Senha" value={senha} onChange={ e => setSenha(e.target.value)} required />
                <input placeholder="Whatsapp" value={whatsapp} onChange={ e => setWhatsapp(e.target.value)} required />

                <div className="input-group">
                    <input placeholder="Cidade" value={cidade} onChange={ e => setCidade(e.target.value)} required />
                    <input placeholder="UF" style={{ width: 80 }} value={uf} onChange={ e => setUf(e.target.value)} required />
                </div>
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
        
    </div>
    );
}