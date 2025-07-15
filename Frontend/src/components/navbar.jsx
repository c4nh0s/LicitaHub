import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">LicitaHub</Link>
      <div className="space-x-4">
        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="bg-white text-blue-700 px-3 py-1 rounded">Cadastro</Link>
          </>
        ) : (
          <>
            <Link to="/dashboard">Painel</Link>
            <button
              onClick={logout}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Sair
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
