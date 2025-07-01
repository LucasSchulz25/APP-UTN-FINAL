import Producto from '../models/producto.model.js';

export const buscarProductoPorNombre = async (req, res) => {
  try {
    const { nombre } = req.query;
    console.log('🧪 Parámetro nombre recibido:', nombre);

    if (!nombre) {
      console.log('⚠️ No enviaste un nombre en la query');
      return res.status(400).json({ mensaje: 'Debe proporcionar un nombre de búsqueda' });
    }

    const regex = new RegExp(nombre, 'i');
    console.log('🔍 Usando regex:', regex);

    const productos = await Producto.find({ nombre: regex });
    console.log('✅ Productos encontrados:', productos);

    res.status(200).json(productos);
  } catch (error) {
    console.error('❌ Error en la búsqueda:', error);
    res.status(500).json({ mensaje: 'Error en la búsqueda', error });
  }
};