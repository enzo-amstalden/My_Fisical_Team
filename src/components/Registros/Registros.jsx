import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaPlus } from "react-icons/fa";
import '../styles/Registros.css';

const equipes = [
  "Basquete 2026/1",
  "Basquete 2026/2",
  "Basquete 2025/1",
  "Basquete 2025/2",
  "Basquete 2024/2",
];

const Registros = () => {
  const navigate = useNavigate();

  const irParaEquipe = (nome) => {
    const slug = encodeURIComponent(nome.replace("/", "-"));
    navigate(`/equipe/${slug}`);
  };

  const irParaNovaEquipe = () => {
    navigate("/registros/nova-equipe");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="reg-container">
      <div className="reg-painel">
        <div className="reg-header">
          <h1 className="reg-titulo">Registros</h1>
          <div className="reg-header-btns">
            <button className="reg-btn-logout" onClick={handleLogout} title="Sair">
              <FaSignOutAlt />
            </button>
            <button className="reg-btn-add" onClick={irParaNovaEquipe} title="Adicionar">
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="reg-grid">
          {equipes.map((equipe) => (
            <button
              key={equipe}
              className="reg-equipe-btn"
              onClick={() => irParaEquipe(equipe)}
            >
              {equipe}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Registros;