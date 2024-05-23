import { Router } from 'express';
import authorsRouter from './authors';
import blogsRouter from './blogs';
import tagsRouter from './tags';
import contactRouter from './contact';
import donateRouter from './donate';
import apiRouter from './api';
import authRouter from './auth';



// our APi Router
const router = Router();

router.use('/api', apiRouter);

router.use('/auth', authRouter);

router.use('/contact', contactRouter);

router.use('/authors', authorsRouter);

router.use('/donate', donateRouter);

router.use('/blogs', blogsRouter);

router.use('/tags', tagsRouter);

export default router;