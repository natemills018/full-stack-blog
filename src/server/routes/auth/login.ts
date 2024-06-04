import * as jwt  from 'jsonwebtoken';
import { Router } from 'express';
import config from '../../config';
import passport from 'passport';
import db from '../../db';
import { compareHash } from '../../db/passwords';
import { ReqUser } from '../../db/types';

const router = Router();

router.post('/', passport.authenticate('local', {session: false}), async (req: ReqUser, res) => {
    // const email = req.body.email;
    // const password = req.body.password;

    // intellicence thought that there also needed to be a question mark in line when creating a token.
    try {
        const token = jwt.sign(
            { userid: req.user?.id, email: req.user?.email, role: 1},
             config.jwt.secret, 
            { expiresIn: '15d'})
           res.json(token)
           return;
        //check for users email
        // const [userFound] = await db.authors.find('email',email);
        // // check if user's email is Found
        // // use the password and compare it to the hashed password
        // console.log(userFound);

        // if (userFound && compareHash(password, userFound.password)) {
        
        // }
        // res.status(401).json({message:'invalid credentials'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'this code sucks'})
    }

})

export default router;