// Global Modules import
const express = require('express');
const sgMail = require('@sendgrid/mail');

// Defined Module Import
const {
  getLatestEvents,
  getAllEvents,
  getLatestNotifications,
  getAllNotifications,
  getTeacher,
  getStudent,
  getSyllabus,
  getTimeTable,
  searchStudentsByName,
  searchStudentsByRollNo,
} = require('./../controllers/visitorControllers');

// Initializing the Router
const visitorRoutes = express.Router();

// Routes
visitorRoutes.get('/getnotifications', getLatestNotifications);

visitorRoutes.get('/getallnotifications', getAllNotifications);

visitorRoutes.get('/getevents', getLatestEvents);

visitorRoutes.get('/getallevents', getAllEvents);

visitorRoutes.get('/getsyll', getSyllabus);

visitorRoutes.get('/gettt', getTimeTable);

visitorRoutes.post('/getteacher', getTeacher);

visitorRoutes.post('/getstudent', getStudent);

visitorRoutes.post('/searchstudentbyname', searchStudentsByName);

visitorRoutes.post('/searchstudentbyrollno', searchStudentsByRollNo);
console.log("hdhfcds");
visitorRoutes.get('./', () => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
    to: 'dhruvkaran24@gmail.com',
      from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  // sgMail.send(msg);
});

module.exports = { visitorRoutes };
