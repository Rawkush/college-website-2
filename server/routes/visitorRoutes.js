// Global Modules import
const express = require('express');

// Defined Module Import
const {
  getLatestEvents,
  getLatestNotifications,
  getTeacher,
  getStudent,
  getSyllabus,
} = require('./../controllers/visitorControllers');

// Initializing the Router
const visitorRoutes = express.Router();

// Routes
visitorRoutes.get('/getnotifications', getLatestNotifications);

visitorRoutes.get('/getevents', getLatestEvents);

visitorRoutes.get('/getsyll', getSyllabus);

visitorRoutes.post('/getteacher', getTeacher);

visitorRoutes.post('/getstudent', getStudent);

module.exports = { visitorRoutes };
