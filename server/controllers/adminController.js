// Global Modules Import
const _ = require('lodash');

// Defined Module Import
const { Teacher } = require('../models/teacher');

const teacherRegister = (req, res) => {
  const body = _.pick(req.body, ['username', 'password', 'email']);
  const newTeacher = new Teacher(body);

  newTeacher
    .save()
    .then(() => {
      res.send(newTeacher);
    })
    .catch((err) => {
      res.send(400).send(err);
    });
};

module.exports = {
  teacherRegister,
};
