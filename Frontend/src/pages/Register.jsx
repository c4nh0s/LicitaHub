import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('fornecedor');

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3001/api/auth/register', {
        email, senha, tipo_usuario: tipo
      });
      alert('Cadastro realizado com sucesso!');
    } catch (err) {
      alert('Erro ao registrar');
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" />
      <select value={tipo} onChange={e => setTipo(e.target.value)}>
        <option value="fornecedor">Fornecedor</option>
        <option value="licitante">Licitante</option>
      </select>
      <button onClick={handleRegister}>Cadastrar</button>
    </div>
  );
};

export default Register;
