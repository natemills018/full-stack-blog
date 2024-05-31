import * as jwt  from 'jsonwebtoken';
import { Router } from 'express';
import config from '../../config';
import passport from 'passport';
import db from '../../db';
import { compareHash, generateHash } from '../../db/passwords';


const router = Router();

router.post('/', async (req, res) => {
    const newAuthor = req.body;
    try {
        newAuthor.password = generateHash(newAuthor.password)
        const result = await db.authors.insert(newAuthor)

        result.insertId
        // const token = jwt.sign(
        //     { userid: result.insertId, email: newAuthor.email, role: 1},
        //      config.jwt.secret, 
        //     { expiresIn: '15d'})
        //    res.json(token)
    //        return;
        //check for users email
        res.json(newAuthor);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'this code sucks'})
    }

})


export default router;