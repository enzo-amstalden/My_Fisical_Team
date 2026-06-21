import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import '../styles/Equipe.css';

const colunas = ["Nome", "Altura", "Peso", "Gordura C.", "DC Abdom.", "DC Coxa", "DC Sipl.", "Gordura C."];

const Equipe = () => {
  const navigate = useNavigate();
  const { nomeEquipe } = useParams();
  const nome = decodeURIComponent(nomeEquipe).replace("-", "/");
  const linhasVazias = Array(7).fill(null);

  const irParaNovoAtleta = () => {
    navigate(`/equipe/${nomeEquipe}/novo-atleta`);
  };

  return (
    <div className="eq-container">
      <div className="eq-painel">
        <div className="eq-header">
          <button className="eq-btn-voltar" onClick={() => navigate("/registros")} title="Voltar">
            <FaArrowLeft />
          </button>
          <h1 className="eq-titulo">Equipe {nome}</h1>
          <button className="eq-btn-add" onClick={irParaNovoAtleta} title="Adicionar">
            <FaPlus />
          </button>
        </div>

        <div className="eq-tabela-config">
          <table className="eq-tabela">
            <thead>
              <tr>
                {colunas.map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {linhasVazias.map((_, i) => (
                <tr key={i} className={i % 2 === 0 ? "linha-par" : "linha-impar"}>
                  {colunas.map((_, j) => (
                    <td key={j}></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Equipe;