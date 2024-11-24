import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useUser(); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [message, setMessage] = useState(""); 
  const [error, setError] = useState(false); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false); 

    try {
      await login(email, password); 
      setMessage("Inicio de sesión exitoso");
      navigate("/"); 
    } catch (err) {
      setError(true);
      setMessage("Credenciales incorrectas, intenta de nuevo");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="login-form p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2>Iniciar sesión</h2>
        {message && (
          <div className={`alert ${error ? "alert-danger" : "alert-success"}`}>
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
