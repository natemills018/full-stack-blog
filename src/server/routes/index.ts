import { Router } from 'express';

import apiRouter from './api';
import authRouter from './auth';



// our APi Router
const router = Router();


router.use('/api', apiRouter);

router.use('/auth', authRouter);



export default router;