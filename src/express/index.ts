import express from 'express';
import router from './routes';
import bodyParser from 'express';

const app = express();

app.use(bodyParser());
app.use(router);

export default app;