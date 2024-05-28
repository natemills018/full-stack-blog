import * as passport from 'passport';
import * as PassportLocal from 'passport-local';
import { compareHash } from '../passwords';
import db from '../../db'
import { JwtPayload } from 'jsonwebtoken';

// potentional option as a middleware for typing when establishing a session. 



passport.serializeUser((user : JwtPayload, done) => done(null, user));
passport.deserializeUser((user: JwtPayload, done) => done(null, user));


passport.use( new PassportLocal.Strategy ({
    usernameField: 'email',
}, async (email, password, done) => {
    try {
        const [userFound] = await db.authors.find('email', email);
        if(userFound && compareHash(password, userFound.password)) {
            done(null, userFound);
        } else {
            done(null, false)
        }

    } catch (error) {
        done(error)
    }
}))

