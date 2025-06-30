import { Router } from 'express';
import { buscarProductoPorNombre } from '../controllers/productos.controller.js';

const router = Router();
router.get('/buscar', buscarProductoPorNombre);
export default router;