// Global Modules import
const express = require('express');

// Configurations
const { multerConfig } = require('./../config/multerConfig');

const uploadTeacherNotification = multerConfig(
  'uploads/teacherNotification',
  /pdf|jpg|jpeg|png/
);
const uploadProfilePic = multerConfig('uploads/teachers', /png|jpg|jpeg/);

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
  updateNotification,
  deleteNotification,
  teacherRegister,
  getTeacherSecondary,
  addTeacherCommittee,
  updateTeacherCommittee,
  removeCommittee,
  getTeacher,
} = require('./../controllers/teacherController');
const {
  LoginValidate,
  registerValidate,
  authTokenValidate,
  addWorkValidate,
  removeWorkValidate,
  addSpecialisationsValidate,
  addTechnicalSkillsValidate,
  addEducationValidate,
  addCommitteeValidate,
  removeCommitteeValidate,
} = require('./../utils/schemas/teacherSchema');

teacherRoutes.post('/register', registerValidate, teacherRegister);

teacherRoutes.post(
  '/getteachersecondary',
  authTokenValidate,
  tokenTeacherAuthenticate,
  getTeacherSecondary
);

teacherRoutes.post('/login', LoginValidate, teacherLogin);

teacherRoutes.post(
  '/logout',
  authTokenValidate,
  tokenTeacherAuthenticate,
  teacherLogout
);

teacherRoutes.patch(
  '/updateprofile',
  uploadProfilePic.single('photo'),
  tokenTeacherAuthenticate,
  teacherUpdate
);

teacherRoutes.patch(
  '/addwork',
  addWorkValidate,
  tokenTeacherAuthenticate,
  addWork
);

teacherRoutes.patch('/updatework', tokenTeacherAuthenticate, updateWork);

teacherRoutes.patch(
  '/removework',
  removeWorkValidate,
  tokenTeacherAuthenticate,
  removeWork
);

teacherRoutes.patch(
  '/updateeducation',
  addEducationValidate,
  tokenTeacherAuthenticate,
  addEducation
);

teacherRoutes.patch(
  '/updatetechnicalskill',
  addTechnicalSkillsValidate,
  tokenTeacherAuthenticate,
  addTechnicalSkills
);

teacherRoutes.patch(
  '/updatespecialisation',
  addSpecialisationsValidate,
  tokenTeacherAuthenticate,
  addTeacherSpecialications
);

teacherRoutes.delete(
  '/deleteTeacher',
  authTokenValidate,
  tokenTeacherAuthenticate,
  deleteTeacher
);

teacherRoutes.post(
  '/addnotification',
  uploadTeacherNotification.single('file'),
  tokenTeacherAuthenticate,
  addNotification
);

teacherRoutes.post(
  '/updatenotification',
  uploadTeacherNotification.single('file'),
  tokenTeacherAuthenticate,
  updateNotification
);

teacherRoutes.delete(
  '/removenotification',
  authTokenValidate,
  tokenTeacherAuthenticate,
  deleteNotification
);

teacherRoutes.post(
  '/addcommittee',
  addCommitteeValidate,
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
  removeCommitteeValidate,
  tokenTeacherAuthenticate,
  removeCommittee
);

teacherRoutes.post(
  '/getteacher',
  authTokenValidate,
  tokenTeacherAuthenticate,
  getTeacher
);

module.exports = { teacherRoutes };
