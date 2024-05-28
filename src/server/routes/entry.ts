import * as jwt from 'jsonwebtoken';
import config from '../config';
import { Router } from 'express';

// To use the javascript webtoken, it's smart to also add the config file so that you can have access to the secret key





const router = Router();


router.get('/', (req, res) => {
    // no token? no go!

    try {
        
        // if() {
        // const bearerToken = req.headers.authorization?.split(' ');
        // const token = bearerToken && bearerToken[0] === 'Bearer' ? bearerToken[1] : null;
        // if (!bearerToken || !token) {
        //     res.status(401).json({message: 'unauthorized'})
        //     return;
        // }                // }

        // // validate token
        // const payload = <{email: string }>jwt.verify(token, config.jwt.secret);

        // console.log(payload);

        // res.json({ message: `Did it work?${payload.email}`})
        res.json('Please work!');
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Your code really sucks!'})
    }
})

export default router;