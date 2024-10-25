// src/components/Login/Login.js
import React, { useState } from 'react';
import './Login.css'; // Asegúrate de tener un archivo CSS para estilos

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Credenciales inválidas');
            }

            const data = await response.text(); // Obtener respuesta
            alert(data); // Muestra un mensaje de éxito (puedes cambiar esto según tus necesidades)

            onLogin(); // Si las credenciales son válidas, llama a onLogin
        } catch (err) {
            setError(err.message); // Mostrar el error en el formulario
        }
    };

    return (
        <div className="container"> {/* Agregar clase para estilizar */}
            <h2>Iniciar Sesión</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};

export default Login;
