//ALL COPILOT
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

export default function Apagar() {
  const [idBusca, setIdBusca] = useState("");
  const [filme, setFilme] = useState(null);
  const navigate = useNavigate();

  const handleProcurar = async () => {
    if (!idBusca) return alert("Digite o id");
    try {
      const res = await api.get(`/filmes/${idBusca}`);
      setFilme(res.data);
    } catch (err) {
      setFilme(null);
      alert("Não achou o filme");
    }
  };

  const handleApagar = async () => {
    if (!confirm("Confirma exclusão?")) return;
    try {
      await api.delete(`/filmes/${filme.id}`);
      alert("Apagado com sucesso");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Erro ao apagar");
    }
  };

  return (
    <div>
      <h2>Apagar Filme</h2>
      <div>
        <input placeholder="Digite o id" value={idBusca} onChange={e => setIdBusca(e.target.value)} />
        <button onClick={handleProcurar}>Procurar</button>
        <button onClick={() => navigate("/")}>Cancelar</button>
      </div>

      {filme && (
        <div>
          <p><strong>Id:</strong> {filme.id}</p>
          <p><strong>Nome:</strong> {filme.nome}</p>
          <button onClick={handleApagar}>Apagar</button>
          <button onClick={() => navigate("/")}>Cancelar</button>
        </div>
      )}
    </div>
  );
}
