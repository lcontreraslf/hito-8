import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [profile, setProfile] = useState(null); 


  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error("Error al iniciar sesión");

      const data = await response.json();
      setToken(data.token); 
      setEmail(data.email); 
    } catch (error) {
      throw error;
    }
  };

 
  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error("Error al registrarse");

      const data = await response.json();
      setToken(data.token); 
      setEmail(data.email); 
    } catch (error) {
      throw error;
    }
  };

 
  const getProfile = async () => {
    if (!token) throw new Error("No se puede obtener el perfil sin un token");

    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      if (!response.ok) throw new Error("Error al obtener el perfil");

      const data = await response.json();
      setProfile(data); 
    } catch (error) {
      throw error;
    }
  };

  
  const logout = () => {
    setToken(null); 
    setEmail(null); 
    setProfile(null); 
  };

  return (
    <UserContext.Provider
      value={{ token, email, profile, login, register, logout, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
