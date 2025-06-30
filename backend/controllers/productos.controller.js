import Producto from '../models/producto.model.js';

export const buscarProductoPorNombre = async (req, res) => {
  try {
    const { nombre } = req.query;

    if (!nombre) {
      return res.status(400).json({ mensaje: 'Debe proporcionar un nombre de búsqueda' });
    }

    const regex = new RegExp(nombre, 'i'); // Insensible a mayúsculas
    const productos = await Producto.find({ nombre: regex });

    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error en la búsqueda', error });
  }
};
