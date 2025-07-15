import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">LicitaHub</Link>
      <div className="space-x-6">
        <Link to="/login">Login</Link>
        <Link to="/register">Cadastro</Link>
      </div>
    </nav>
  );
}
