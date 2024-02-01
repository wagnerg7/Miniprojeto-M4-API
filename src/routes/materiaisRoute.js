import express from 'express';
import { listarMateriais } from '../controllers/materiaisController.js';

const router = express.Router();

router.get('/materiais-educacionais/:disciplina', listarMateriais);

export default router;