import express from 'express';
import config from './config';

const app = express();

const port = config.PORT;
app.get('/proxytesting', (req, res) => res.send(`proxy success! response from http://localhost:${port}`));
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});