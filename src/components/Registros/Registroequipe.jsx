import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMale, FaFemale, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import '../styles/Form.css';

const RegistroEquipe = () => {
  const navigate = useNavigate();
  const [nomeEquipe, setNomeEquipe] = useState('');
  const [categoria, setCategoria] = useState('Masculina');
  const [quantidade, setQuantidade] = useState('');

  const handleContinuar = () => {
    if (!nomeEquipe.trim()) return;
    navigate("/registros");
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <button className="form-btn-voltar" onClick={() => navigate("/registros")}>
            <FaArrowLeft />
          </button>
          <h1 className="form-titulo">Registro Equipe</h1>
        </div>

        <div className="form-body">
          <div className="form-group">
            <label>Nome da Equipe</label>
            <input
              type="text"
              value={nomeEquipe}
              onChange={(e) => setNomeEquipe(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Categoria</label>
            <div className="form-radio-group">
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="categoria"
                  value="Masculina"
                  checked={categoria === 'Masculina'}
                  onChange={() => setCategoria('Masculina')}
                />
                <FaMale /> Masculina
              </label>
              <label className="form-radio-label">
                <input
                  type="radio"
                  name="categoria"
                  value="Feminina"
                  checked={categoria === 'Feminina'}
                  onChange={() => setCategoria('Feminina')}
                />
                <FaFemale /> Feminina
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Quantidade de integrantes:</label>
            <input
              type="number"
              className="form-input-small"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              min="1"
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

export default RegistroEquipe;