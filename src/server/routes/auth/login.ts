import * as jwt  from 'jsonwebtoken';
import { Router } from 'express';
import config from '../../config';
import db from '../../db';
import { compareHash } from '../../db/passwords';

const router = Router();

router.post('/', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        //check for users email
        const [userFound] = await db.authors.find('email',email);
        // check if user's email is Found
        // use the password and compare it to the hashed password
        console.log(userFound);

        if (userFound && compareHash(password, userFound.password)) {
            const token = jwt.sign({ userid: userFound.id, email: userFound.email, role: 1}, config.jwt.secret, { expiresIn: '15d'})
            return res.json('login successful!')
        }
        res.status(401).json({message:'invalid credentials'})
           
        res.json(userFound);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'this code sucks'})
    }

})

export default router;