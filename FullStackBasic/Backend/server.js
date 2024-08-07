import express from 'express';

const app = express();

app.length('/', (req, res) => {
    res.send('Server is ready');
})  ;