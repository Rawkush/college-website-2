// Global Modules import
const express = require('express');

// Defined Modules import
const { teacherRegister } = require('./../controllers/adminController');

// Initializing the Router
const adminRoutes = express.Router();

// Routing
adminRoutes.post('/teacherRegister', teacherRegister);

module.exports = {
  adminRoutes,
};
