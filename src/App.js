import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home'; // Importa a nova tela
import Luminosidade from './components/Luminosidade';
import Umidade from './components/Umidade';
import Contador from './components/Contador';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('TokenAccess'); // Verifica se o token existe
  return isAuthenticated ? children : <Navigate to="/Login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para Login */}
        <Route path="/Login" element={<Login />} />
        {/* Rota para Home após login */}
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        {/* Rota protegida para o Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Outras rotas protegidas */}
        <Route
          path="/luminosidade"
          element={
            <ProtectedRoute>
              <Luminosidade />
            </ProtectedRoute>
          }
        />
        <Route
          path="/umidade"
          element={
            <ProtectedRoute>
              <Umidade />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contador"
          element={
            <ProtectedRoute>
              <Contador />
            </ProtectedRoute>
          }
        />
        {/* Redireciona a raiz para o Login */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
