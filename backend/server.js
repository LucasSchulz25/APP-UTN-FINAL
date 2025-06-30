import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const cors = require('cors');
app.use(cors());


dotenv.config(); // ✅ Esto carga el .env

const app = express();
const PORT = process.env.PORT || 3000;


mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('🟢 Conectado a MongoDB'))
  .catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

