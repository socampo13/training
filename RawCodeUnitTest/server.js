const express = require('express');

const port =3020;

const app = express();

app.get('/test', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});