import { Router } from 'express';
import authorsRouter from './authors';
import blogsRouter from './blogs';
import tagsRouter from './tags';



// our APi Router
const router = Router();

router.use('/authors', authorsRouter);

router.use('/blogs', blogsRouter);

router.use('/tags', tagsRouter);

export default router;