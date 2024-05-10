import { Router } from 'express';
import authorsRouter from './authors';
import blogsRouter from './blogs';
import tagsRouter from './tags';
import contactRouter from './contact';



// our APi Router
const router = Router();

router.use('/contact', contactRouter);

router.use('/authors', authorsRouter);

router.use('/blogs', blogsRouter);

router.use('/tags', tagsRouter);

export default router;