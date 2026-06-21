import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import '../styles/Form.css';

const RegistroDobra = () => {
  const navigate = useNavigate();
  const { nomeEquipe } = useParams();
  const { state: dadosGerais } = useLocation();

  const [dcTriceps, setDcTriceps] = useState('');
  const [dcCoxa, setDcCoxa] = useState('');
  const [dcAbdominal, setDcAbdominal] = useState('');
  const [dcSupraIliaca, setDcSupraIliaca] = useState('');

  const handleSalvar = () => {
    console.log("Atleta registrado:", {
      ...dadosGerais,
      dcTriceps,
      dcCoxa,
      dcAbdominal,
      dcSupraIliaca,
    });
    navigate(`/equipe/${nomeEquipe}`);
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h1 className="form-titulo">Registro Dobra Cutânea</h1>
        </div>

        <div className="form-body">
          <div className="form-group">
            <label>DC Tríceps</label>
            <input
              type="number"
              value={dcTriceps}
              onChange={(e) => setDcTriceps(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>DC Coxa</label>
            <input
              type="number"
              value={dcCoxa}
              onChange={(e) => setDcCoxa(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>DC Abdominal</label>
            <input
              type="number"
              value={dcAbdominal}
              onChange={(e) => setDcAbdominal(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>DC Supra-Ilíaca</label>
            <input
              type="number"
              value={dcSupraIliaca}
              onChange={(e) => setDcSupraIliaca(e.target.value)}
            />
          </div>
        </div>

        <div className="form-footer">
          <button className="form-btn-avancar" onClick={handleSalvar}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistroDobra;