// src/components/Usuarios/UsuarioList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import './UsuarioList.css'; // Asegúrate de tener el archivo CSS para los estilos

const UsuarioList = () => {
    const [usuarios, setUsuarios] = useState([]);

    // Llamada al backend para obtener la lista de usuarios
    useEffect(() => {
        axios.get("http://localhost:8080/api/usuarios")
            .then(response => {
                setUsuarios(response.data);
            })
            .catch(error => {
                console.error("Error fetching the users:", error);
            });
    }, []);

    return (
        <div className="usuario-list">
            <h2>Lista de Usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.rol}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsuarioList;
