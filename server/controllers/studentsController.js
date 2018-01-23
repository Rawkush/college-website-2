//  Global Modules Import
const passport = require('../config/passportConfig');

//  Defined Modules Import
const { Student } = require('../models/student');
const { Secondary } = require('./../models/secondary');

const {
  pickBody,
  pickSpecialisations,
  pickAccomplishments,
  pickProjects,
  saveMinimal,
  updateMinimal,
  deleteStudentMinimal,
  authTokenMinimal,
  checkUserMinimal,
  generateAuthToken,
  removeTokenMinimal,
  deleteSecondaryMinimal,
} = require('./../utils/utils');

// Initializing Model Specific Functions

const updateStudentMinimal = updateMinimal(Student, true, false);
const updateSecondaryMinimal = updateMinimal(Secondary, false, true);
const saveStudentMinimal = saveMinimal(Student);
const checkStudentMinimal = checkUserMinimal(Student);
const authStudentMinimal = authTokenMinimal(Student);

const deleteSecondary = deleteSecondaryMinimal(Secondary);

//  Controllers

const studentGoogleLogin = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

const studentGitHubLogin = passport.authenticate('github');

const studentLinkedInLogin = passport.authenticate('linkedin');

const studentGoogleAuthenticate = passport.authenticate('google', {
  session: false,
});

const studentGitHubAuthenticate = passport.authenticate('github', {
  session: false,
});

const studentLinkedInAuthentication = passport.authenticate('linkedin', {
  session: false,
});

//  Student Registration Controller
const studentRegistration = async (req, res) => {
  const body = pickBody(req);
  const { token } = req.body;
  try {
    const data = await saveStudentMinimal(body, token);
    res.header('x-auth', data.token).send(data.user);
  } catch (error) {
    res.status(400).send(error);
  }
};

//  Authenticatin the Student with the current given token
const tokenAuthenticate = async (req, res, next) => {
  const token = req.header('x-auth');
  try {
    const student = await authStudentMinimal(token);
    if (student) {
      req.student = student;
      req.token = token;
      next();
    }
  } catch (error) {
    res.status(401).send('Access Denied!');
  }
};

// eslint-disable-next-line
const getAllNotifications = (req, res) => {
  //  TODO: Give all the saved notifications to the students.
};

//  Update the students data.
const updateStudent = async (req, res) => {
  const body = pickBody(req);
  try {
    const updatedStudent = await updateStudentMinimal(
      { _id: req.student._id },
      {
        $set: { ...body },
      }
    );
    res.send(updatedStudent);
  } catch (error) {
    res.sendStatus(400).send('Something went wrong');
  }
};

// Delelte Account
const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await deleteStudentMinimal(Student, req.student._id);
    await deleteSecondary(req.student._id);
    res.send(`student has been deleted, ${deletedStudent}`);
  } catch (error) {
    res.sendStatus(400).send('Something went wrong');
  }
};

// Add Secondary Data
const addAccomplishment = async (req, res) => {
  const body = pickAccomplishments(req);
  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.student._id },
      {
        $push: { ...body },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.sendStatus(400).send('Something went wrong');
  }
};

const addProjects = async (req, res) => {
  const body = pickProjects(req);

  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.student._id },
      {
        $push: { ...body },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.sendStatus(400).send('Something went wrong');
  }
};

const addSpecialisations = async (req, res) => {
  const body = pickSpecialisations(req);
  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.student._id },
      {
        $set: { ...body },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.sendStatus(400).send('Something went wrong');
  }
};

const checkStudent = async (req, res, next) => {
  const { token } = req.body;
  const exists = await checkStudentMinimal(token);
  if (exists) {
    res.cookie('token', token, {
      expires: new Date(Date.now() + 30000),
      httpOnly: true,
    });
    res.redirect('/login');
    return;
  }
  next();
};

const login = async (req, res) => {
  const { token } = req.cookies;
  const student = await checkStudentMinimal(token);
  if (student) {
    const newToken = await generateAuthToken(student);
    res.header('x-auth', newToken).send('you are logged in now');
    return;
  }
  res.sendStatus(404);
};

const logout = async (req, res) => {
  const { student, token } = req;
  try {
    await removeTokenMinimal(student, token);
    res.sendStatus(200).send();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  studentGoogleLogin,
  studentGitHubLogin,
  studentLinkedInLogin,
  studentGoogleAuthenticate,
  studentGitHubAuthenticate,
  studentLinkedInAuthentication,
  studentRegistration,
  tokenAuthenticate,
  updateStudent,
  deleteStudent,
  addAccomplishment,
  addProjects,
  getAllNotifications,
  addSpecialisations,
  checkStudent,
  login,
  logout,
};
