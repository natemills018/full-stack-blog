import { Router } from 'express';
import db from '../db';

const router = Router();



// BEFORE adding new get requests for this section review the video that luke reviewed so that you can get a better understanding of how the use of the get request can be used efficiently


// GET // api/clients/123
router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const [blog] = await db.blogs.getOne(id);
       
        if(! blog) {
            return res.status(404).json({ message: 'No User was found with this id'})
        }
        res.json(blog);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

router.get('/', async (req, res) => {
    try {
        const blog = await db.blogs.getAll();
        res.json(blog);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

router.post('/', async (req, res) => {
    try {
        const newBlog = req.body;
        const result = await db.blogs.insert(newBlog.title, newBlog.content);
        res.json({ message: 'New Author added', id: result.insertId});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

export default router;