// Global Modules Import
const _ = require('lodash');

// Defined Module Imports
const { Teacher } = require('../models/teacher');

const teacherLogin = (req, res) => {
  const body = _.pick(req.body, ['username', 'password']);

  Teacher.findByCredentials(body.username, body.password)
    .then((user) => {
      return user.generateAuthToken().then((token) => {
        res.header('x-auth', token).send(user);
      });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  teacherLogin,
};
