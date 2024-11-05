import React from 'react';

const InputField = ({ label, type, value, onChange }) => {
  return (
    <div className="login-container">
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Digite seu email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Digite sua senha" />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
    
  );
};


export default InputField;