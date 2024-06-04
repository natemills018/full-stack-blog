import * as passport from 'passport';
import * as PassportLocal from 'passport-local';
import * as PassportJWT from 'passport-jwt';
import { compareHash } from '../passwords';
import config from '../../config';
import db from '../../db'
import { JwtPayload } from 'jsonwebtoken';
import { Application } from 'express';
import { AuthorsTable } from '../models';
import { Payload } from '../types';

// potentional option as a middleware for typing when establishing a session. 



export function configurPassword(app: Application) {
    passport.serializeUser((user : AuthorsTable, done) => {
        if(user.password) {
            delete user.password;
        }
        done(null, user)
    });
    passport.deserializeUser((user: AuthorsTable, done) => done(null, user));
    
    
    
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
    
    
    
    
    passport.use(new PassportJWT.Strategy ({
        jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.jwt.secret
    }, 
    
    
        (payload: Payload, done) =>{
        try {
            done(null, payload)
        } catch (error) {
            done
        }
    }))
    app.use(passport.initialize())
      
}


// passport.serializeUser((user : JwtPayload, done) => done(null, user));
// passport.deserializeUser((user: JwtPayload, done) => done(null, user));


// passport.use( new PassportLocal.Strategy ({
//     usernameField: 'email',
// }, async (email, password, done) => {
//     try {
//         const [userFound] = await db.authors.find('email', email);
//         if(userFound && compareHash(password, userFound.password)) {
//             done(null, userFound);
//         } else {
//             done(null, false)
//         }

//     } catch (error) {
//         done(error)
//     }
// }))

