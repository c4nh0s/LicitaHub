import React, { useState } from "react";
import { api } from "../services/api";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", { email, senha });
      login(res.data.token);
    } catch (err) {
      alert("Erro no login");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
          className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl mb-6">Login</h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            className="w-full mb-4 px-3 py-2 border rounded"
            required
          />
          <input
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            type="password"
            className="w-full mb-6 px-3 py-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Entrar
          </button>
        </form>
      </main>
    </>
  );
};

export default Login;
