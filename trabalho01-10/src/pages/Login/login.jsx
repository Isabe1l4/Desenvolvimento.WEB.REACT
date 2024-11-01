import React, { useState } from 'react';
import InputField from '../../InputField/input.jsx';
import Button from '../../componentes/Button/button.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <InputField 
        label="Email ou Telefone" 
        type="text" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <InputField 
        label="Senha" 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <Button text="Entrar" />
    </form>
  );
};

export default Login;