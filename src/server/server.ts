import express from 'express';
import cors from 'cors';
import apiRouter from './routes';

const isProduction = process.env.NODE_ENV === 'production';
const isDevelopment = process.env.NODE_ENV === 'development';

const app = express();

if (isDevelopment) {
	app.use(cors());
}

if (isProduction) {
	app.use(express.static('public'));
}

// side effect import

import {configurPassword} from './db/middlewares/passport-strategies.mw';

// all our api routes
// app.use(passport.initialize())
// app.use(passport.session())
configurPassword(app);
app.use(express.json())

app.use('/api', apiRouter);

// 404 fallback for client side routing
if (isProduction) {
	app.get('*', (req, res) => {
		res.sendFile('index.html', { root: 'public' });
	});
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


