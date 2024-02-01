import express from 'express';
import { buscarMaterial } from '../controllers/buscaController.js';

const router = express.Router();

router.get('/buscar-material/:id', buscarMaterial);

export default router;