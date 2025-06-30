import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // ✅ Esto carga el .env

const app = express();
const PORT = process.env.PORT || 3000;

// ⚠️ Acá es donde fallaba porque process.env.MONGODB_URI estaba vacío
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('🟢 Conectado a MongoDB'))
  .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

