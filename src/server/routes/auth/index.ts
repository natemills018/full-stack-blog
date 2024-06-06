import { Router } from 'express';
import loginRouter from './login';
import { tokenCheck } from '../../db/middlewares/auth.mw';


const router = Router();

router.use('/login', loginRouter);
router.get('/validate', tokenCheck, (req, res) => res.status(200).json({
    message: 'Sick your token works!'
}) );


export default router;