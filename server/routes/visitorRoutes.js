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

const {
  getStudentValidate,
  searchByNameValidate,
  searchByRollValidate,
  verifyEmailValidate,
} = require('./../utils/schemas/visitorSchema');
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

visitorRoutes.post('/getstudent', getStudentValidate, getStudent);

visitorRoutes.post(
  '/searchstudentbyname',
  searchByNameValidate,
  searchStudentsByName
);

visitorRoutes.post(
  '/searchstudentbyrollno',
  searchByRollValidate,
  searchStudentsByRollNo
);

visitorRoutes.post('/verifyemail', verifyEmailValidate, verifyEmail);

module.exports = { visitorRoutes };
