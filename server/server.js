// Global Modules Import
const mongoose = require('./db/mongoose'); // eslint-disable-line
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
//  Generated Imports
const { adminRoutes } = require('./routes/adminRoutes');
const { teacherRoutes } = require('./routes/teachersRoutes');
const { studentRoutes } = require('./routes/studentRoutes');
const { visitorRoutes } = require('./routes/visitorRoutes');

const app = express();

const port = process.env.PORT || 3000;
const host = '0.0.0.0';
const publicPath = path.join(__dirname, '..', 'public');

//  Adding middlewares
app.use(helmet());
app.use(helmet.noCache());
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
app.use(helmet.expectCt({ maxAge: 123 }));

app.use(bodyParser.json());

const allowedOrigins = [
  // 'http://someorigin.com',
  // 'http://anotherorigin.com',
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

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
app.use('/s/visitor/', visitorRoutes);
app.use('/s/admin/', adminRoutes);
app.use('/s/teacher/', teacherRoutes);
// app.use('/s/student/', studentRoutes);
app.use('/s/student/', studentRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.use((req, res, next) => {
  const error = new Error('Oops! something went wrong');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
  next();
});
app.server = app.listen(port, host, () => console.log(`Server is up on the ${port}`)); // eslint-disable-line

module.exports = { app };
