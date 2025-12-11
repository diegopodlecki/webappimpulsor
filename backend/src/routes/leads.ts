import { Router } from 'express';
import { createLead } from '../controllers/leadsController';

const router = Router();

router.post('/leads', createLead);

export default router;
