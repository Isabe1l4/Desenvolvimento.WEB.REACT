import React from 'react';
import Logodott from './assets/logodott.png';
import Login from './pages/Login/login.jsx';
import './App.css';
import Home from "./pages/Home/index.jsx";


function App() {
  /*return (
    <div className="login-container">
    <div>
      <img src={Logodott} alt="Descrição da Imagem" style={{ width: '80px', height: 'auto' }} />
    </div>
      <h1>Entrar no Twitter</h1>
      <Login />      
      <p>
        Não tem uma conta? <a href="#">Cadastre-se</a>
      </p>
    </div>
  );*/
  return (
    <div className="App">
          <Home />
        </div>
    );
}

export default App;