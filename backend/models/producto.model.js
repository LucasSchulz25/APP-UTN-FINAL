import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: Number,
  descripcion: String,
  categoria: String
}, { timestamps: true });

export default mongoose.model('Producto', productoSchema, 'products');

