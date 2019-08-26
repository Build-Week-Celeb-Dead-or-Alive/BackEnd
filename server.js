const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const authenticate = require('../auth/authenticate_middleware.js');
// const authRouter = require('./auth/auth_router.js');
// const celebsRouter = require('./celebs/celebs_router.js');
// const usersRouter = require('./users/users_router.js');


const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// server.use('/auth', authRouter);
// server.use('/celebs', celebsRouter);
// server.use('/users', usersRouter); //restricted

server.get('/', (req, res) => {
  res.json({ api: 'Im Alive!!'})
});

module.exports = server;