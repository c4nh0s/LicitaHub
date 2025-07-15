import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { api } from "../services/api";

export default function Register() {
  const [form, setForm] = useState({ nome: "", email: "", senha: "" });
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro("");
    try {
      await api.post("/register", form);
      navigate("/login");
    } catch (err) {
      setErro("Erro ao cadastrar. Verifique os dados ou o servidor.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl mb-6">Cadastro</h2>
          {erro && <p className="text-red-600 mb-4">{erro}</p>}
          <input
            name="nome"
            type="text"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border rounded"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 px-3 py-2 border rounded"
            required
          />
          <input
            name="senha"
            type="password"
            placeholder="Senha"
            value={form.senha}
            onChange={handleChange}
            className="w-full mb-6 px-3 py-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Criar Conta
          </button>
        </form>
      </main>
    </>
  );
}
