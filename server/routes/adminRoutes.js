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
  adminRegister,
  adminLogin,
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

adminRoutes.patch(
  '/editnotification',
  uploadNotifications.single('file'),
  editNotifications
);

adminRoutes.delete('/deletenotification', deleteNotifications);

adminRoutes.post('/addevent', uploadEvents.array('photo', 5), addEvents);

adminRoutes.patch('/editevent', editEvent);

adminRoutes.delete('/deleteevent', deleteEvents);

adminRoutes.post('/addsyll', uploadSyllabus.single('file'), addSyllabus);

adminRoutes.patch('/editsyll', uploadSyllabus.single('file'), editSyllabus);

adminRoutes.delete('/deletesyll', deleteSyllabus);

adminRoutes.post('/addtt', uploadTimeTable.single('file'), addTimeTable);

adminRoutes.patch('/edittt', uploadTimeTable.single('file'), editTimeTable);

adminRoutes.delete('/deletett', deleteTimeTable);

adminRoutes.post('/register', adminRegister);

adminRoutes.post('/login', adminLogin);

module.exports = {
  adminRoutes,
};
