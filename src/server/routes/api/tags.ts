import { Router } from 'express';
import db from '../../db';

const router = Router();



// BEFORE adding new get requests for this section review the video that luke reviewed so that you can get a better understanding of how the use of the get request can be used efficiently


// GET // api/clients/123
router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const [tag] = await db.tags.getOne(id);
       
        if(! tag) {
            return res.status(404).json({ message: 'No Tag was found with this id'})
        }
        res.json(tag);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

router.get('/', async (req, res) => {
    try {
        const tag = await db.tags.getAll();
        res.json(tag);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})


// Update the post and the put requests for this route, according the blogs route

router.post('/', async (req, res) => {
    try {
        const newTag = req.body;
        const result = await db.tags.insert(newTag.name);
        res.json({ message: 'New Author added', id: result.insertId});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

export default router;