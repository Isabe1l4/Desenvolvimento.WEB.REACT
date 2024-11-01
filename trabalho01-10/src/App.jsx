import React from 'react';
import Login from './Login';
import './App.css';

function App() {
  return (
    <div className="login-container">
      <h1>Login do Twitter</h1>
      <Login />
      <p>
        Não tem uma conta? <a href="#">Cadastre-se</a>
      </p>
    </div>
  );
}

export default App;