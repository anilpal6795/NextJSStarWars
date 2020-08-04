const next = require('next');
const express = require('express');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

const PORT = 3000;

app.prepare().then(() => {

    server.all('*', (req, res) => handle(req, res));

    server.listen(PORT, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });
})