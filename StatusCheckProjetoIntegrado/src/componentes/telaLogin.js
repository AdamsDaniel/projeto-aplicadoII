import React, { useState } from 'react';
import axios from 'axios';
import './telaLogin.css';
import logo from '../img/logomoderna.png';
import { useNavigate } from 'react-router-dom';

/**
 * @file Componente de tela de login para autenticação de usuários.
 * @author Omitted
 */

/**
 * Componente que renderiza a tela de login, permitindo que os usuários insiram suas credenciais
 * para acessar a plataforma.
 *
 * @returns {JSX.Element} O componente de tela de login.
 */
function TelaLogin() {
    /**
     * Estado para armazenar o valor do campo de login.
     * @type {[string, function(string): void]}
     */
    const [login, setLogin] = useState('');

    /**
     * Estado para armazenar o valor do campo de senha.
     * @type {[string, function(string): void]}
     */
    const [password, setPassword] = useState('');

    /**
     * Estado para armazenar mensagens de feedback para o usuário (e.g., sucesso ou erro no login).
     * @type {[string, function(string): void]}
     */
    const [message, setMessage] = useState('');

    /**
     * Hook do React Router para navegar para outras rotas programaticamente.
     * @type {function(string): void}
     */
    const navigate = useNavigate(); 


    
    /**
     * Lida com o envio do formulário de login. Envia as credenciais para a API,
     * trata a resposta e redireciona o usuário em caso de sucesso.
     *
     * @param {React.FormEvent<HTMLFormElement>} e - O evento de envio do formulário.
     */
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3031/login', {
                register: login,
                password: password
            },
        {
            withCredentials: true
        }
        );
        setMessage(response.data.message);

        if (response.data.message === 'Usuário autenticado.') { 
            navigate('/colaborador'); // 
        }
        
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'Erro na conexão.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="StatusCheck Logo" className="logo" />
                <h2 className="login-title">StatusCheck</h2>
                <h3 className="login-title2">Insira suas credenciais para acessar a plataforma</h3>
                <form onSubmit={handleLogin}>
                    <input
                        type="text"
                        placeholder="Login"
                        className="login-input"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        className="login-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="login-button">Entrar</button>
                </form>
                {message && <p className="message">{message}</p>}
            </div>
        </div>
    );
}

export default TelaLogin;
