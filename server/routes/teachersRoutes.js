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
  updateWork,
  removeWork,
  addEducation,
  addTechnicalSkills,
  addTeacherSpecialications,
  deleteTeacher,
  addNotification,
  teacherRegister,
  getTeacherSecondary,
  addTeacherCommittee,
  updateTeacherCommittee,
  removeCommittee,
} = require('./../controllers/teacherController');

teacherRoutes.post('/register', teacherRegister);

teacherRoutes.post(
  '/getteachersecondary',
  tokenTeacherAuthenticate,
  getTeacherSecondary
);

teacherRoutes.post('/login', teacherLogin);

teacherRoutes.post('/teacherLogout', tokenTeacherAuthenticate, teacherLogout);

teacherRoutes.patch('/updateprofile', tokenTeacherAuthenticate, teacherUpdate);

teacherRoutes.patch('/addwork', tokenTeacherAuthenticate, addWork);

teacherRoutes.patch('/updatework', tokenTeacherAuthenticate, updateWork);

teacherRoutes.patch('/removework', tokenTeacherAuthenticate, removeWork);

teacherRoutes.patch('/updateeducation', tokenTeacherAuthenticate, addEducation);

teacherRoutes.patch(
  '/updatetechnicalskill',
  tokenTeacherAuthenticate,
  addTechnicalSkills
);

teacherRoutes.patch(
  '/updatespecialisation',
  tokenTeacherAuthenticate,
  addTeacherSpecialications
);

teacherRoutes.delete('/deleteTeacher', tokenTeacherAuthenticate, deleteTeacher);

teacherRoutes.post(
  '/addnotification',
  uploadTeacherNotification.single('file'),
  tokenTeacherAuthenticate,
  addNotification
);

teacherRoutes.post(
  '/addcommittee',
  tokenTeacherAuthenticate,
  addTeacherCommittee
);

teacherRoutes.patch(
  '/updatecommittee',
  tokenTeacherAuthenticate,
  updateTeacherCommittee
);

teacherRoutes.delete(
  '/removecommittee',
  tokenTeacherAuthenticate,
  removeCommittee
);

module.exports = { teacherRoutes };
