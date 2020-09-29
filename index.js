const express = require('express');
const db = require('./data/db.js')
const postRouter = require('./data/posts/postsRouter')

const server = express();
server.use('/api/posts', postRouter);

const port = 5000;
server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
});