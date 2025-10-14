import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TelaInicial from './componentes/telaInicial';
import TelaTreinamentos from './componentes/telaTreinamentos';
import TelaLogin from './componentes/telaLogin';
import TelaColabCadastrados from './componentes/telaColabCadastrados';
import Dashboard from './componentes/dashboard';
import TelaCadastroUsuario from './componentes/telaCadastroUsuario';
import ChatBotPopup from './componentes/chatBotPopup';
import ChatTest from './componentes/ChatTeste';

/**
 * @file Componente principal da aplicação que gerencia as rotas.
 * @author Omitted
 * @see {@link https://reactrouter.com/web/guides/quick-start} para mais informações sobre React Router.
 */

/**
 * Componente principal da aplicação que configura o roteamento para as diferentes telas.
 *
 * @returns {JSX.Element} O componente App com as rotas configuradas.
 */
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/statuscheck" />} />
        <Route path="/statuscheck" element={<TelaLogin />} />
        <Route path="/colaborador" element={<TelaInicial />} />
        <Route path="/treinamentos" element={<TelaTreinamentos />} />
        <Route path="/treinamentos-colaborador" element={<TelaColabCadastrados />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/acessogerencial" element={<TelaCadastroUsuario/>} />
      </Routes>
    </Router>
  );
};

export default App;

