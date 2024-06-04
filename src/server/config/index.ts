import dotenv from 'dotenv';

dotenv.config();

export default {
    mailgun: {
        apiKey: process.env.MAILGUN_KEY as string,
        domain: process.env.MAILGUN_DOMAIN as string,
        toEmail: process.env.MAILGUN_TO_EMAIL as string
    },
    stripe: {
        apiKey: process.env.STRIPE_API_KEY as string 
    },

    db: {
        host: process.env.DB_HOST as string,
        user: process.env.DB_USER as string,
        password: process.env.DB_PASSWORD as string,
        database: process.env.DB_DATABASE as string
    },
    
    jwt: {
        secret: process.env.JWT_SECRET as string,
        expires: process.env.JWT_EXPIRES as string
    }

}