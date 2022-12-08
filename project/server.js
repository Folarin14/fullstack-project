/*
Attribution
source: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/ 
Date: 30th Nov 2022
*/

'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World From Express Server');
});

app.listen(PORT, HOST, () => {
  console.log(`VS code console? Running on http://${HOST}:${PORT}`);
});
