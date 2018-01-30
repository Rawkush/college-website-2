// Global Modules import
const express = require('express');

// Configurations
const { multerConfig } = require('./../config/multerConfig');

const uploadTimeTable = multerConfig('uploads/timeTable', /pdf/);
const uploadSyllabus = multerConfig('uploads/timeTable', /pdf/);
const uploadEvents = multerConfig('uploads/events', /jpg|jpeg|png/);
const uploadNotifications = multerConfig('uploads/notifications', /pdf/);

// Defined Modules import
const {
  addNotifications,
  deleteNotifications,
  addEvents,
  deleteEvents,
  addSyllabus,
  deleteSyllabus,
  addTimeTable,
  deleteTimeTable,
  deleteTeacher,
  editNotifications,
  editTimeTable,
  editSyllabus,
  editEvent,
} = require('./../controllers/adminController');

// Initializing the Router
const adminRoutes = express.Router();

// Routing

adminRoutes.delete('/deleteTeacher', deleteTeacher);

adminRoutes.post(
  '/addnotification',
  uploadNotifications.single('file'),
  addNotifications
);

adminRoutes.post(
  '/editnotifications',
  uploadNotifications.single('file'),
  editNotifications
);

adminRoutes.delete('/deletenotifications', deleteNotifications);

adminRoutes.post('/addevents', uploadEvents.single('file'), addEvents);

adminRoutes.post('/editevents', uploadEvents.single('file'), editEvent);

adminRoutes.delete('/deleteevents', deleteEvents);

adminRoutes.post('/addsyll', uploadSyllabus.single('file'), addSyllabus);

adminRoutes.post('/editsyll', uploadSyllabus.single('file'), editSyllabus);

adminRoutes.delete('/deletesyll', deleteSyllabus);

adminRoutes.post('/addtt', uploadTimeTable.single('file'), addTimeTable);

adminRoutes.post('/edittt', uploadTimeTable.single('file'), editTimeTable);

adminRoutes.delete('/deletett', deleteTimeTable);

module.exports = {
  adminRoutes,
};
