// Global Modules import
const express = require('express');

// Defined Module Import
const {
  getLatestEvents,
  getLatestNotifications,
  getTeacher,
  getStudent,
} = require('./../controllers/visitorControllers');

// Initializing the Router
const visitorRoutes = express.Router();

// Routes
visitorRoutes.get('/getnotifications', getLatestNotifications);

visitorRoutes.get('/getevents', getLatestEvents);

visitorRoutes.post('/getteacher', getTeacher);

visitorRoutes.post('/getstudent', getStudent);

module.exports = { visitorRoutes };
