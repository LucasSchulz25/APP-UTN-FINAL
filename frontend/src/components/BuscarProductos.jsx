import { useState } from 'react';
import axios from 'axios';
import '../../src/index.css';
export default function BuscarProductos() {
  const [nombre, setNombre] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscar = async () => {
    try {
      console.log('📤 Enviando búsqueda:', nombre);
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/productos/buscar`, {
        params: { nombre }
      });
      console.log('🔍 Respuesta de búsqueda:', res.data); 
      setResultados(res.data);
    } catch (err) {
      console.error('❌ Error al buscar productos', err);
    }
  };

  return (
    <div className="buscar-container">
    <h2 className="buscar-titulo">Buscar Productos</h2>
  
    <div className="buscar-form">
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Buscar producto"
        className="buscar-input"
      />
      <button onClick={buscar} className="buscar-button">Buscar</button>
    </div>
  
    {resultados.length > 0 ? (
      <ul className="resultados-lista">
        {resultados.map((p) => (
          <li key={p._id} className="resultado-item">
            {p.nombre} - ${p.precio}
          </li>
        ))}
      </ul>
    ) : (
      <p className="sin-resultados">No hay resultados para mostrar</p>
    )}
  </div>
  );
}
