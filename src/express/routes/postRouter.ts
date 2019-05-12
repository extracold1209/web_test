import { Router } from 'express';
import PostService from 'services/postService';
const router = Router();
// mapped /post

router.get('/', async (req, res) => {
    const posts = await PostService.getAllPosts();
    res.json(posts);
});

router.post('/', async (req, res) => {
    // await PostService.addPost()
    res.send('not implements');
})

export default router;