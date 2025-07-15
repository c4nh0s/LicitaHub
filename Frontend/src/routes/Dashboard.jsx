import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-4">Painel</h1>
        {user ? (
          <p>Bem-vindo, <strong>{user.mensagem}</strong></p>
        ) : (
          <p>Carregando dados do usuário...</p>
        )}
      </main>
    </>
  );
}
