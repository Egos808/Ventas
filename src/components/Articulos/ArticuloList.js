import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ArticuloList = () => {
  const [articulos, setArticulos] = useState([]);

  const fetchArticulos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/articulos');
      setArticulos(response.data);
    } catch (error) {
      console.error("Error al obtener artículos", error);
    }
  };

  useEffect(() => {
    fetchArticulos();
  }, []);

  return (
    <div>
      <h2>Lista de Artículos</h2>
      <ul>
        {articulos.map((articulo) => (
          <li key={articulo.id}>
            {articulo.nombre} - ${articulo.precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticuloList;
