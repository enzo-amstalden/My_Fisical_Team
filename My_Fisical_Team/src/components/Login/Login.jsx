import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Envio");
    alert("Dados preenchidos:\n E-mail: " + email + " senha: " + password);
  };

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div>
                <input type="email" placeholder='E-mail'
                onChange={(e) => setEmail(e.target.value)} />
                <FaUser className="icon" />
            </div>
            <div>
                <input type="password" placeholder='Senha' 
                onChange={(e) => setPassword(e.target.value)} />
                <FaLock className="icon" />
            </div>
            <div className="forgot-password">
                <a href="#">Esqueceu sua senha?</a>
            </div>


            <button type="submit">Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login
