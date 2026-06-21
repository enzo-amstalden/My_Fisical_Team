import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import '../styles/Form.css';

const RegistroGeral = () => {
  const navigate = useNavigate();
  const { nomeEquipe } = useParams();

  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [idade, setIdade] = useState('');

  const handleContinuar = () => {
    navigate(`/equipe/${nomeEquipe}/novo-atleta/dobra-cutanea`, {
      state: { nome, peso, altura, idade },
    });
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <button className="form-btn-voltar" onClick={() => navigate(`/equipe/${nomeEquipe}`)}>
            <FaArrowLeft />
          </button>
          <h1 className="form-titulo">Registro Geral</h1>
        </div>

        <div className="form-body">
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Peso</label>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Altura</label>
            <input
              type="number"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Idade</label>
            <input
              type="number"
              value={idade}
              onChange={(e) => setIdade(e.target.value)}
            />
          </div>
        </div>

        <div className="form-footer">
          <button className="form-btn-avancar" onClick={handleContinuar}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistroGeral;