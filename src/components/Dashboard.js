import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate(); // Hook para navegação

  const handleRedirect = (path) => {
    const token = localStorage.getItem('TokenAccess'); // Verifica se o usuário está autenticado
    if (token) {
      navigate(path); // Redireciona para a rota especificada
    } else {
      navigate('/login'); // Redireciona para o login se não estiver autenticado
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Bem vindo ao Smart City</h2>
      <div className="buttons-container">
        {/* Botões redirecionam para diferentes rotas ou login */}
        <button onClick={() => handleRedirect('/luminosidade')} className="dashboard-button">
          Luminosidade
        </button>
        <button onClick={() => handleRedirect('/temperatura')} className="dashboard-button">
          Temperatura
        </button>
        <button onClick={() => handleRedirect('/umidade')} className="dashboard-button">
          Umidade
        </button>
        <button onClick={() => handleRedirect('/contador')} className="dashboard-button">
          Contador
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
