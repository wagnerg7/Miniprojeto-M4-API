import express from 'express';
import { compartilharMaterial } from '../controllers/compartilhamentoController.js';

const router = express.Router();

router.post('/compartilhar-material', compartilharMaterial);


export default router;