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
  verifyEmail,
  getAllQuesetionPaper,
} = require('./../controllers/visitorControllers');

// Initializing the Router
const visitorRoutes = express.Router();

// Routes
visitorRoutes.get('/getnotifications', getLatestNotifications);

visitorRoutes.get('/getallnotifications', getAllNotifications);
visitorRoutes.get('/getallQuestionPaper', getAllQuesetionPaper);

visitorRoutes.get('/getevents', getLatestEvents);

visitorRoutes.get('/getallevents', getAllEvents);

visitorRoutes.get('/getsyll', getSyllabus);

visitorRoutes.get('/gettt', getTimeTable);

visitorRoutes.post('/getteacher', getTeacher);

visitorRoutes.post('/getstudent', getStudent);

visitorRoutes.post('/searchstudentbyname', searchStudentsByName);

visitorRoutes.post('/searchstudentbyrollno', searchStudentsByRollNo);

visitorRoutes.post('/verifyemail', verifyEmail);

module.exports = { visitorRoutes };
