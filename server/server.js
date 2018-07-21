// Global Modules Import

// require('express-async-errors');
const mongoose = require('./db/mongoose'); // eslint-disable-line
const express = require('express');

const app = express();

const port = process.env.PORT || 3000;
const host = '0.0.0.0';

require('./middleware/routes')(app);

app.server = app.listen(port, host, () => console.log(`Server is up on the ${port}`)); // eslint-disable-line

module.exports = { app };
