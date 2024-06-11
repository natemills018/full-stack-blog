import { Router } from 'express';
import loginRouter from './login';
import registerRouter from './register';
import { tokenCheck } from '../../db/middlewares/auth.mw';


const router = Router();

router.use('/login', loginRouter);
router.use('/register', registerRouter)
router.get('/validate', tokenCheck, (req, res) => res.status(200).json({
    message: 'Sick your token works!'
}) );


export default router;