// Global Modules import
const express = require('express');

// Configurations
const { multerConfig } = require('./../config/multerConfig');

const uploadAccomplishments = multerConfig(
  'uploads/achievement',
  /jpg|jpeg|png/
);

const uploadProjects = multerConfig('uploads/projects', /jpg|jpeg|png/);

// Initializing the Router
const studentRoutes = express.Router();

//  Generated Imports
const {
  studentGoogleLogin,
  studentGitHubLogin,
  studentLinkedInLogin,
  studentGoogleAuthenticate,
  studentGitHubAuthenticate,
  studentLinkedInAuthentication,
  studentRegistration,
  fillRegistration,
  checkStudent,
  login,
  logout,
  tokenAuthenticate,
  updateStudent,
  deleteStudent,
  addAccomplishment,
  addProjects,
  addSpecialisations,
  removeAccomplishment,
  removeProject,
  getStudent,
  getAllStudentSecondary,
  updateAccomplishment,
  updateProject,
} = require('./../controllers/studentsController');

// Routes
studentRoutes.get('/auth/google', studentGoogleLogin);

studentRoutes.get(
  '/auth/google/callback',
  studentGoogleAuthenticate,
  checkStudent,
  fillRegistration
);

studentRoutes.get('/auth/github', studentGitHubLogin);

studentRoutes.get(
  '/auth/github/callback',
  studentGitHubAuthenticate,
  checkStudent,
  fillRegistration
);

studentRoutes.get('/auth/linkedin', studentLinkedInLogin);

studentRoutes.get(
  '/auth/linkedin/callback',
  studentLinkedInAuthentication,
  checkStudent,
  fillRegistration
);

studentRoutes.post('/registeration', checkStudent, studentRegistration);

studentRoutes.patch('/updateProfile', tokenAuthenticate, updateStudent);

studentRoutes.delete('/deleteProfile', tokenAuthenticate, deleteStudent);

studentRoutes.get('/login', login);

studentRoutes.patch(
  '/addAccomplishment',
  uploadAccomplishments.single('photo'),
  tokenAuthenticate,
  addAccomplishment
);

studentRoutes.patch(
  '/updateaccomplishment',
  uploadAccomplishments.single('photo'),
  tokenAuthenticate,
  updateAccomplishment
);

studentRoutes.post('/logout', tokenAuthenticate, logout);

studentRoutes.patch(
  '/addSpecialisations',
  tokenAuthenticate,
  addSpecialisations
);

studentRoutes.patch(
  '/removeAccomplishment',
  tokenAuthenticate,
  removeAccomplishment
);

studentRoutes.patch(
  '/addproject',
  uploadProjects.array('photos', 5),
  tokenAuthenticate,
  addProjects
);

studentRoutes.patch(
  '/updateproject',
  uploadProjects.array('photos', 5),
  tokenAuthenticate,
  updateProject
);

studentRoutes.patch('/removeProject', tokenAuthenticate, removeProject);

studentRoutes.post('/getstudent', tokenAuthenticate, getStudent);

studentRoutes.post(
  '/getstudentsecondary',
  tokenAuthenticate,
  getAllStudentSecondary
);

module.exports = { studentRoutes };
