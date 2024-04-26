import { Router } from 'express';
import db from '../db';

const router = Router();



// BEFORE adding new get requests for this section review the video that luke reviewed so that you can get a better understanding of how the use of the get request can be used efficiently


// GET // api/clients/123
router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const clients = await db.clients.getOne(id);
        const client = clients[0];
        if(! client) {
            return res.status(404).json({ message: 'No User was found with this id'})
        }
        res.json(client);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

router.get('/', async (req, res) => {
    try {
        const clients = await db.clients.getAll();
        res.json(clients);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

router.post('/', async (req, res) => {
    try {
        const newClient = req.body;
        const result = await db.tweets.insert(newClient.handle, newClient.email);
        res.json({ message: 'Tweet Created', id: result.insertId});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

export default router;