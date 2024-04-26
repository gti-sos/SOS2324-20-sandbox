'use strict';
const express = require('express');
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const MSG = process.env.MSG;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world, message: ' + MSG + '\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

