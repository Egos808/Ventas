// src/App.js
import React, { useState } from 'react';
import Login from './components/Login/Login';
import UsuariosList from './components/Usuarios/UsuarioList'; // Asegúrate de que este componente esté correctamente definido
import './App.css'; // Asegúrate de que la ruta sea correcta


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true); // Cambia el estado a 'true' al iniciar sesión
    };

    const handleLogout = () => {
        setIsLoggedIn(false); // Cambia el estado a 'false' para cerrar sesión
    };

    return (
        <div>
            <h1>Sistema de Ventas Online</h1>
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <div>
                    <UsuariosList />
                    <button onClick={handleLogout}>Salir</button>
                </div>
            )}
        </div>
    );
};

export default App;
