// Global Modules import
const express = require('express');

// Configurations
const { multerConfig } = require('./../config/multerConfig');

const uploadTeacherNotification = multerConfig(
  'uploads/teacherNotification',
  /pdf|jpg|jpeg|png/
);

// Initializing the Router
const teacherRoutes = express.Router();

//  Generated Imports
const {
  teacherLogin,
  tokenTeacherAuthenticate,
  teacherLogout,
  teacherUpdate,
  addWork,
  removeWork,
  addEducation,
  addTechnicalSkills,
  addTeacherSpecialications,
  deleteTeacher,
  addNotification,
  teacherRegister,
} = require('./../controllers/teacherController');

teacherRoutes.post('/register', teacherRegister);

teacherRoutes.post('/teacherLogin', teacherLogin);

teacherRoutes.post('/teacherLogout', tokenTeacherAuthenticate, teacherLogout);

teacherRoutes.patch('/teacherUpdate', tokenTeacherAuthenticate, teacherUpdate);

teacherRoutes.patch('/addWork', tokenTeacherAuthenticate, addWork);

teacherRoutes.patch('/removeWork', tokenTeacherAuthenticate, removeWork);

teacherRoutes.patch('/addEducation', tokenTeacherAuthenticate, addEducation);

teacherRoutes.patch(
  '/addTechnicalSkills',
  tokenTeacherAuthenticate,
  addTechnicalSkills
);

teacherRoutes.patch(
  '/addSpecialiscations',
  tokenTeacherAuthenticate,
  addTeacherSpecialications
);

teacherRoutes.delete('/deleteTeacher', tokenTeacherAuthenticate, deleteTeacher);

teacherRoutes.post(
  '/addnotification',
  uploadTeacherNotification.single('file'),
  /* tokenTeacherAuthenticate, */
  addNotification
);

module.exports = { teacherRoutes };
