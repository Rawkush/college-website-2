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
  giveAllTeachersList,
} = require('./../controllers/adminController');

// Initializing the Router
const adminRoutes = express.Router();

// Routing

adminRoutes.delete('/deleteTeacher', tokenAuthenticate, deleteTeacher);

adminRoutes.post(
  '/addnotification',
  uploadNotifications.single('file'),
  tokenAuthenticate,
  addNotifications
);

adminRoutes.patch(
  '/editnotification',
  uploadNotifications.single('file'),
  tokenAuthenticate,
  editNotifications
);

adminRoutes.delete(
  '/deletenotification',
  tokenAuthenticate,
  deleteNotifications
);

adminRoutes.post(
  '/addevent',
  uploadEvents.array('photo', 5),
  tokenAuthenticate,
  addEvents
);

adminRoutes.patch('/editevent', tokenAuthenticate, editEvent);

adminRoutes.delete('/deleteevent', tokenAuthenticate, deleteEvents);

adminRoutes.post(
  '/addsyll',
  uploadSyllabus.single('file'),
  tokenAuthenticate,
  addSyllabus
);

adminRoutes.patch(
  '/editsyll',
  uploadSyllabus.single('file'),
  tokenAuthenticate,
  editSyllabus
);

adminRoutes.delete('/deletesyll', tokenAuthenticate, deleteSyllabus);

adminRoutes.post(
  '/addtt',
  uploadTimeTable.single('file'),
  tokenAuthenticate,
  addTimeTable
);

adminRoutes.patch(
  '/edittt',
  uploadTimeTable.single('file'),
  tokenAuthenticate,
  editTimeTable
);

adminRoutes.delete('/deletett', tokenAuthenticate, deleteTimeTable);

adminRoutes.post('/register', adminRegister);

adminRoutes.post('/login', adminLogin);

adminRoutes.post('/logout', tokenAuthenticate, adminLogout);

adminRoutes.post('/teacherregisteration', tokenAuthenticate, registerTeacher);

adminRoutes.post('/giveallteacher', tokenAuthenticate, giveAllTeachersList);

module.exports = {
  adminRoutes,
};
