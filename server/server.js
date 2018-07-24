require('express-async-errors');
const mongoose = require('./db/mongoose'); // eslint-disable-line
const express = require('express');
const winston = require('winston');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');

//  Generated Imports
const { adminRoutes } = require('./routes/adminRoutes');
const { teacherRoutes } = require('./routes/teachersRoutes');
const { studentRoutes } = require('./routes/studentRoutes');
const { visitorRoutes } = require('./routes/visitorRoutes');
const error = require('./middleware/error');

const app = express();

winston.handleExceptions(
  // new winston.transports.Console({ colorise: true, prettyPrint: true }),
  new winston.transports.File({ filename: 'uncaughtException.log' })
);

process.on('unhandledRejection', (err) => {
  throw err;
});
// throw new Error('frefhjeh');

winston.add(winston.transports.File, { filename: 'logfile.log' });

const port = process.env.PORT || 3000;
const host = '0.0.0.0';
const publicPath = path.join(__dirname, '..', 'public');
//  Adding middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use('/uploads/', express.static('uploads'));
app.use('/images/', express.static('public/images'));
app.use('/assets/', express.static('public/assets'));
app.use('/manifest.json/', (req, res) => {
  res.sendFile(path.join(publicPath, 'manifest.json'));
});
app.use('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'application/javascript');
  next();
});
app.use('*.css', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');

  next();
});
app.use(express.static(publicPath));
app.use(cors());

//  Routing
// app.get('/', (req, res) => res.render('index'));
app.use('/s/admin/', adminRoutes);
app.use('/s/teacher/', teacherRoutes);
app.use('/s/student/', studentRoutes);
app.use('/s/visitor/', visitorRoutes);

app.use(error);
if (app.get('env' === 'development')) {
  app.use((err, req, res, next) => {
    err.stack = err.stack || '';
    const errorDetails = {
      message: err.message,
      status: err.status,
      stackHighlighted: err.stack.replace(
        /[a-z_-\d]+.js:\d+:\d+/gi,
        '<mark>$&</mark>'
      ),
    };
    res.status(err.status || 500);
    res.format({
      // Based on the `Accept` http header
      'text/html': () => {
        res.render('error', errorDetails);
      }, // Form Submit, Reload the page
      'application/json': () => res.json(errorDetails), // Ajax call, send JSON back
    });
  });
}


app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, host, () => console.log(`Server is up on the ${port}`)); // eslint-disable-line