import { Router } from 'express';
import authorsRouter from './authors';
import blogsRouter from './blogs';
import tagsRouter from './tags';
import contactRouter from './contact';
import donateRouter from './donate';
import entryRouter from './entry';

const router = Router();



// BEFORE adding new get requests for this section review the video that luke reviewed so that you can get a better understanding of how the use of the get request can be used efficiently


// GET // api/clients/123


router.use('/entry', entryRouter);

router.use('/contact', contactRouter);

router.use('/authors', authorsRouter);

router.use('/donate', donateRouter);

router.use('/blogs', blogsRouter);

router.use('/tags', tagsRouter);

export default router;