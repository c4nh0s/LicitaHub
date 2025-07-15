import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:3001/api/auth/login', { email, senha });
      localStorage.setItem('token', res.data.token);
      alert('Login realizado!');
    } catch (err) {
      alert('Erro no login');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
