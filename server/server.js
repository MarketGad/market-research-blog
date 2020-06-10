import express from 'express';
import config from './config';

const app = express();

const port = config.PORT;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});