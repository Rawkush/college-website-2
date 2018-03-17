// Global Modules import
const express = require('express');

// Defined Module Import
const {
  getLatestEvents,
  getAllEvents,
  getLatestNotifications,
  getAllNotifications,
  getTeacher,
  getStudent,
  getSyllabus,
  getTimeTable,
  searchStudentsByName,
  searchStudentsByRollNo,
  searchEmail,
} = require('./../controllers/visitorControllers');

// Initializing the Router
const visitorRoutes = express.Router();

// Routes
visitorRoutes.get('/getnotifications', getLatestNotifications);

visitorRoutes.get('/getallnotifications', getAllNotifications);

visitorRoutes.get('/getevents', getLatestEvents);

visitorRoutes.get('/getallevents', getAllEvents);

visitorRoutes.get('/getsyll', getSyllabus);

visitorRoutes.get('/gettt', getTimeTable);

visitorRoutes.post('/getteacher', getTeacher);

visitorRoutes.post('/getstudent', getStudent);

visitorRoutes.post('/searchstudentbyname', searchStudentsByName);

visitorRoutes.post('/searchstudentbyrollno', searchStudentsByRollNo);

visitorRoutes.post('/searchemail', searchEmail);

module.exports = { visitorRoutes };
