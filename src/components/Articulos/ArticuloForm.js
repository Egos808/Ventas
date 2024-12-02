import React, { useState } from 'react';
import axios from 'axios';

const ArticuloForm = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/articulos', {
        nombre,
        precio,
      });
      setNombre('');
      setPrecio('');
      // Aquí podrías añadir lógica para actualizar la lista de artículos
    } catch (error) {
      console.error("Error al agregar el artículo", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre del Artículo:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Precio:</label>
        <input
          type="number"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />
      </div>
      <button type="submit">Agregar Artículo</button>
    </form>
  );
};

export default ArticuloForm;
