import { useState } from 'react'
import axios from 'axios'

export default function BuscarProductos() {
  const [nombre, setNombre] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscar = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/productos/buscar`, {
        params: { nombre }
      });
      setResultados(res.data);
    } catch (err) {
      console.error('Error al buscar productos', err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Buscar producto"
      />
      <button onClick={buscar}>Buscar</button>

      <ul>
        {resultados.map((p) => (
          <li key={p._id}>{p.nombre} - ${p.precio}</li>
        ))}
      </ul>
    </div>
  );
}
