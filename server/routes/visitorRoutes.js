// Global Modules import
const express = require('express');

// Defined Module Import
const {
  getLatestEvents,
  getAllEvents,
  getLatestNotifications,
  getTeacher,
  getStudent,
  getSyllabus,
  getTimeTable,
} = require('./../controllers/visitorControllers');

// Initializing the Router
const visitorRoutes = express.Router();

// Routes
visitorRoutes.get('/getnotifications', getLatestNotifications);

visitorRoutes.get('/getevents', getLatestEvents);

visitorRoutes.get('/getallevents', getAllEvents);

visitorRoutes.get('/getsyll', getSyllabus);

visitorRoutes.get('/gettt', getTimeTable);

visitorRoutes.post('/getteacher', getTeacher);

visitorRoutes.post('/getstudent', getStudent);

module.exports = { visitorRoutes };
