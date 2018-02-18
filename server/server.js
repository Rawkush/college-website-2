// Global Modules Import
const mongoose = require('./db/mongoose'); // eslint-disable-line
const express = require('express');
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

const app = express();

const port = process.env.PORT || 3000;
const host = '0.0.0.0';
const publicPath = path.join(__dirname, '..', 'public');

//  Adding middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use('/uploads', express.static('uploads'));
app.use(express.static(publicPath));
app.use(cors());

// For uploaded files
app.use('/uploads/', express.static(path.join(__dirname, '..', 'uploads')));

//  Routing
app.get('/', (req, res) => res.render('index'));
app.use('/s/admin/', adminRoutes);
app.use('/s/teacher/', teacherRoutes);
app.use('/s/student/', studentRoutes);
app.use('/s/visitor/', visitorRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, host, () => console.log(`Server is up on the ${port}`)); // eslint-disable-line
