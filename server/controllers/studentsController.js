//  Global Modules Import
const passport = require('../config/passportConfig');

//  Defined Modules Import
const { StudentPrimary } = require('../models/studentPrimary');
const { StudentSecondry } = require('./../models/studentsSecondry');

const {
  pickBody,
  pickSpecialisations,
  pickAccomplishments,
  pickProjects,
  decodeAuthTokenMinimal,
  saveMinimal,
  updateMinimal,
  deleteMinimal,
  authTokenMinimal,
  checkUserMinimal,
  generateAuthToken,
  removeTokenMinimal,
  deleteSecondaryMinimal,
} = require('./../utils/utils');

// Initializing Model Specific Functions

const updateStudentMinimal = updateMinimal(StudentPrimary, true, false);
const saveStudentMinimal = saveMinimal(StudentPrimary);
const checkStudentMinimal = checkUserMinimal(StudentPrimary);
const authStudentMinimal = authTokenMinimal(StudentPrimary);
const deleteStudentMinimal = deleteMinimal(StudentPrimary);
const decodeStudentAuthToken = decodeAuthTokenMinimal(StudentPrimary);

const updateSecondaryMinimal = updateMinimal(StudentSecondry, false, true);
const deleteSecondary = deleteSecondaryMinimal(StudentSecondry);

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
  let decodedToken;

  try {
    decodedToken = await decodeStudentAuthToken(token);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }

  const { provider, id } = decodedToken;

  const newBody = {
    ...body,
    auth: {
      provider,
      providerId: id,
    },
  };

  try {
    const data = await saveStudentMinimal(newBody);
    res.header('x-auth', data.token).send(data.user);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
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
    res.status(401).send(`Access Denied! ${error}`);
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
    res.header('x-auth', req.header('x-auth')).send(updatedStudent);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

// Delelte Account
const deleteStudent = async (req, res) => {
  try {
    const deletedStudent = await deleteStudentMinimal(req.student._id);
    await deleteSecondary(req.student._id);
    res.send(`student has been deleted, ${deletedStudent}`);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
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
    return res.status(400).send(`Something went wrong: ${error}`);
  }
};

const removeAccomplishment = async (req, res) => {
  const { _id } = req.body;
  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.student._id },
      {
        $pull: { accomplishments: { _id } },
      }
    );
    return res.header('x-auth', req.header('x-auth')).send(updatedSecondary);
  } catch (error) {
    return res.status(400).send(`Something went wrong: ${error}`);
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
    return res.status(400).send(`Something went wrong: ${error}`);
  }
};

const removeProject = async (req, res) => {
  const { _id } = req.body;

  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.student._id },
      {
        $pull: { projects: { _id } },
      }
    );
    return res.header('x-auth', req.header('x-auth')).send(updatedSecondary);
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
    return res.status(400).send(`Something went wrong: ${error}`);
  }
};

const checkStudent = async (req, res, next) => {
  const { token } = req.user ? req.user : req.body;
  try {
    const exists = await checkStudentMinimal(token);
    if (exists) {
      res.cookie('token', token, {
        expires: new Date(Date.now() + 30000),
        httpOnly: true,
      });
      res.redirect('/student/login');
      return;
    }
  } catch (error) {
    res.status(400).send(`Something went wrong: ${error}`);
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
  getAllNotifications,
  checkStudent,
};
