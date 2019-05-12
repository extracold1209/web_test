import { Router } from 'express';
import postRouter from './postRouter';

const router = Router();

router.get('/', (req, res) => {
    res.send('hello world');
});

router.use('/posts', postRouter);

export default router;