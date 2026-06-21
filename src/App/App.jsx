import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/Login/Login";
import Registros from "../components/Registros/Registros";
import Equipe from "../components/Equipe/Equipe";
import RegistroEquipe from "../components/Registros/Registroequipe";
import RegistroGeral from "../components/Equipe/Registrogeral";
import RegistroDobra from "../components/Equipe/Registrodobra";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registros" element={<Registros />} />
        <Route path="/registros/nova-equipe" element={<RegistroEquipe />} />
        <Route path="/equipe/:nomeEquipe" element={<Equipe />} />
        <Route path="/equipe/:nomeEquipe/novo-atleta" element={<RegistroGeral />} />
        <Route path="/equipe/:nomeEquipe/novo-atleta/dobra-cutanea" element={<RegistroDobra />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;