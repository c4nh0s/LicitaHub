import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-10">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo ao LicitaHub</h1>
        <p>Plataforma simples e eficiente para conectar licitantes e fornecedores.</p>
      </main>
    </>
  );
}
