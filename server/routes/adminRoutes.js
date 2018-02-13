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
  adminLogout,
  registerTeacher,
  tokenAuthenticate,
} = require('./../controllers/adminController');

// Initializing the Router
const adminRoutes = express.Router();

// Routing

adminRoutes.delete('/deleteTeacher', tokenAuthenticate, deleteTeacher);

adminRoutes.post(
  '/addnotification',
  tokenAuthenticate,
  uploadNotifications.single('file'),
  addNotifications
);

adminRoutes.patch(
  '/editnotification',
  tokenAuthenticate,
  uploadNotifications.single('file'),
  editNotifications
);

adminRoutes.delete(
  '/deletenotification',
  tokenAuthenticate,
  deleteNotifications
);

adminRoutes.post(
  '/addevent',
  tokenAuthenticate,
  uploadEvents.array('photo', 5),
  addEvents
);

adminRoutes.patch('/editevent', tokenAuthenticate, editEvent);

adminRoutes.delete('/deleteevent', tokenAuthenticate, deleteEvents);

adminRoutes.post(
  '/addsyll',
  tokenAuthenticate,
  uploadSyllabus.single('file'),
  addSyllabus
);

adminRoutes.patch(
  '/editsyll',
  tokenAuthenticate,
  uploadSyllabus.single('file'),
  editSyllabus
);

adminRoutes.delete('/deletesyll', tokenAuthenticate, deleteSyllabus);

adminRoutes.post(
  '/addtt',
  tokenAuthenticate,
  uploadTimeTable.single('file'),
  addTimeTable
);

adminRoutes.patch(
  '/edittt',
  tokenAuthenticate,
  uploadTimeTable.single('file'),
  editTimeTable
);

adminRoutes.delete('/deletett', deleteTimeTable);

adminRoutes.post('/register', adminRegister);

adminRoutes.post('/login', adminLogin);

adminRoutes.post('/logout', tokenAuthenticate, adminLogout);

adminRoutes.post('/teacherregisteration', registerTeacher);

module.exports = {
  adminRoutes,
};
