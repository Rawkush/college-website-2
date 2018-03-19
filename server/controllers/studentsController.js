//  Global Modules Import
const passport = require('../config/passportConfig');
const jwt = require('jsonwebtoken');

//  Defined Modules Import
const { StudentPrimary } = require('../models/studentPrimary');
const { StudentSecondry } = require('./../models/studentsSecondry');
const { EmailOtp } = require('./../models/email&otp');

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
  giveAllSecondary,
} = require('./../utils/utils');

// Initializing Model Specific Functions

const updateStudentMinimal = updateMinimal(StudentPrimary, true, false);
const saveStudentMinimal = saveMinimal(StudentPrimary);
const checkStudentMinimal = checkUserMinimal(StudentPrimary);
const authStudentMinimal = authTokenMinimal(StudentPrimary);
const deleteStudentMinimal = deleteMinimal(StudentPrimary);
const decodeStudentAuthToken = decodeAuthTokenMinimal(StudentPrimary);
const giveAllStudentSecondary = giveAllSecondary(StudentSecondry);

const updateSecondaryMinimal = updateMinimal(StudentSecondry, false, true);
const updateSecondaryMinimalNoNew = updateMinimal(
  StudentSecondry,
  false,
  false
);
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
  const { token, email, otp } = req.body;
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
    const verification = await EmailOtp.find({ email, otp });
    if (verification && verification.length === 0) {
      throw Error('Verification Error');
    }
    await EmailOtp.deleteOne({ email, otp });
    const data = await saveStudentMinimal(newBody);
    res.send(data);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

//  Authenticatin the Student with the current given token
const tokenAuthenticate = async (req, res, next) => {
  const { token } = req.body;
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
        $push: { accomplishments: { ...body } },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.status(400).send(`Something went wrong: ${error}`);
  }
};

const updateAccomplishment = async (req, res) => {
  const _creator = req.student._id;
  const { _id } = req.body;
  const body = pickAccomplishments(req);

  let update;

  if (body.photo === null) {
    delete body.photo;
    update = {
      'accomplishments.$.title': body.title,
      'accomplishments.$.description': body.description,
    };
  } else {
    update = {
      'accomplishments.$.title': body.title,
      'accomplishments.$.description': body.description,
      'accomplishments.$.photo': body.photo,
    };
  }

  try {
    const updatedSecondary = await updateSecondaryMinimal(
      {
        _creator,
        'accomplishments._id': _id,
      },
      {
        $set: update,
      }
    );
    res.send(updatedSecondary);
  } catch (error) {
    res.status(401).send(`Some error happened: ${error}`);
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
        $push: { projects: body },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.status(400).send(`Something went wrong: ${error}`);
  }
};

const updateProject = async (req, res) => {
  const _creator = req.student._id;
  const { _id } = req.body;
  const body = pickProjects(req);

  let update;

  if (body.photos[0] === undefined) {
    delete body.photos;
    update = {
      'projects.$.title': body.title,
      'projects.$.description': body.description,
      'projects.$.link': body.link,
    };
  } else {
    update = {
      'projects.$.title': body.title,
      'projects.$.description': body.description,
      'projects.$.link': body.link,
      'projects.$.photos': body.photos,
    };
  }

  try {
    const updatedSecondary = await updateSecondaryMinimal(
      {
        _creator,
        'projects._id': _id,
      },
      {
        $set: update,
      }
    );
    res.send(updatedSecondary);
  } catch (error) {
    res.status(401).send(`Some error happened: ${error}`);
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
        httpOnly: false,
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
  const { token } = req.body;
  const student = await checkStudentMinimal(token);
  if (student) {
    const newToken = await generateAuthToken(student);
    res.send({ token: newToken });
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

const fillRegistration = (req, res) => {
  const token2 = jwt.sign(req.user, process.env.JWT_SECRET_2);
  res.cookie('token', token2, {
    expires: new Date(Date.now() + 300000),
    httpOnly: false,
  });
  res.redirect('/student/register');
};

const getStudent = (req, res) => {
  res.send(req.student);
};

const getAllStudentSecondary = async (req, res) => {
  const _creator = req.student._id; // eslint-disable-line
  try {
    const secondaryData = await giveAllStudentSecondary(_creator);
    res.send(secondaryData);
  } catch (error) {
    res.status(401).send(`Something went wrong : ${error}`);
  }
};

const markAsRead = async (req, res) => {
  const _creator = req.student._id;
  const { _id } = req.body;
  try {
    await updateSecondaryMinimalNoNew(
      {
        _creator,
        'notifications._id': _id,
      },
      {
        $set: {
          'notifications.$.read': true,
        },
      }
    );
    res.status(200).send({ _id });
  } catch (error) {
    res.send(`Something went wrong: ${error}`);
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
  fillRegistration,
  login,
  logout,
  tokenAuthenticate,
  updateStudent,
  deleteStudent,
  addAccomplishment,
  updateAccomplishment,
  addProjects,
  addSpecialisations,
  removeAccomplishment,
  removeProject,
  getAllNotifications,
  checkStudent,
  getStudent,
  getAllStudentSecondary,
  updateProject,
  markAsRead,
};
