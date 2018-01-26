// Global Modules import
const express = require('express');

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
} = require('./../controllers/studentsController');

// Routes
studentRoutes.get('/auth/google', studentGoogleLogin);

studentRoutes.get(
  '/auth/google/callback',
  studentGoogleAuthenticate,
  checkStudent,
  (req, res) => {
    res.send(req.user);
  }
);

studentRoutes.get('/auth/github', studentGitHubLogin);

studentRoutes.get(
  '/auth/github/callback',
  studentGitHubAuthenticate,
  checkStudent,
  (req, res) => {
    res.send(req.user);
  }
);

studentRoutes.get('/auth/linkedin', studentLinkedInLogin);

studentRoutes.get(
  '/auth/linkedin/callback',
  studentLinkedInAuthentication,
  checkStudent,
  (req, res) => {
    res.send(req.user);
  }
);

studentRoutes.post('/register', checkStudent, studentRegistration);

studentRoutes.patch('/updateProfile', tokenAuthenticate, updateStudent);

studentRoutes.patch('/deleteProfile', tokenAuthenticate, deleteStudent);

studentRoutes.get('/login', login);

studentRoutes.patch('/addAccomplishment', tokenAuthenticate, addAccomplishment);

studentRoutes.post('/logout', tokenAuthenticate, logout);

studentRoutes.patch('/addProjects', tokenAuthenticate, addProjects);

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

studentRoutes.patch('/removeProject', tokenAuthenticate, removeProject);

studentRoutes.patch('/removeProject', tokenAuthenticate, removeProject);

module.exports = { studentRoutes };
