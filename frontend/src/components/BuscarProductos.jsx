import { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Buscar Productos</h2>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Buscar producto"
      />
      <button onClick={buscar}>Buscar</button>

      {resultados.length > 0 ? (
        <ul>
          {resultados.map((p) => (
            <li key={p._id}>{p.nombre} - ${p.precio}</li>
          ))}
        </ul>
      ) : (
        <p>No hay resultados para mostrar</p>
      )}
    </div>
  );
}
