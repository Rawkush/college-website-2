// Global Modules import
const express = require('express');

// Defined Modules import
const {
  teacherRegister,
  addNotifications,
  deleteNotifications,
  addEvents,
  deleteEvents,
  addSyllabus,
  deleteSyllabus,
  addTimeTable,
  deleteTimeTable,
  deleteTeacher,
} = require('./../controllers/adminController');

// Initializing the Router
const adminRoutes = express.Router();

// Routing
adminRoutes.post('/teacherRegister', teacherRegister);

adminRoutes.delete('/deleteTeacher', deleteTeacher);

adminRoutes.post('/addnotification', addNotifications);

adminRoutes.delete('/deletenotifications', deleteNotifications);

adminRoutes.post('/addevents', addEvents);

adminRoutes.delete('/deleteevents', deleteEvents);

adminRoutes.post('/addsyll', addSyllabus);

adminRoutes.delete('/deletesyll', deleteSyllabus);

adminRoutes.post('/addtt', addTimeTable);

adminRoutes.delete('/deletett', deleteTimeTable);

module.exports = {
  adminRoutes,
};
