import { Router } from 'express';
import db from '../../db';

const router = Router();



// BEFORE adding new get requests for this section review the video that luke reviewed so that you can get a better understanding of how the use of the get request can be used efficiently


// GET // api/clients/123
router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const blog = await db.blogs.getOne(id);
       
        if(!blog) {
            return res.status(404).json({ message: 'No Blog was found with this id'})
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


//When you're updating existing data, you don't want to use the insert keyword because you aren't actually inserting any NEW elements



router.put('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10);
        const updateBlogPost = req.body;
        console.log({ id, blogData: updateBlogPost })
        await db.blogs.updateBlogPost(id, updateBlogPost);
        res.json({ message: 'Blog Content Updated', id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

router.post('/', async (req, res) => {
    try {
        const newBlog = req.body;
        const result = await db.blogs.insert(newBlog.title, newBlog.content, 1);
        res.json({ message: 'New Author added', id: result.insertId});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

export default router;




// COMPLETED