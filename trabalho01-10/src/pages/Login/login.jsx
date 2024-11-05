import React, { useState } from 'react';
import InputField from '../../components/InputField/input.jsx';
import Button from '../../components/Button/button.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="email" id="email" placeholder="Telefone, email, ou usuário" />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input type="password" id="password" placeholder="Senha" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;