import { Router } from 'express';
import { crearProspecto } from '../controllers/leadsController';

const router = Router();

router.post('/prospectos', crearProspecto);

export default router;
