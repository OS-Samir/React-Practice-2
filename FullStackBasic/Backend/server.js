import express from 'express';

const app = express();

app.get('jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'First Joke'
        },
        {
            id: 2,
            title: 'A second joke'
        },
        {
            id: 3,
            title: 'This is a third joke'
        },
        {
            id: 4,
            title: 'This is a fourth joke'
        },
        {
            id: 5,
            title: 'This is a fifth joke'
        }
    ]
});

// get a list of 5 jokes

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})