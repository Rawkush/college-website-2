// Defined Module Imports
const { TeacherPrimary } = require('./../models/teacherPrimary');
const { TeacherSecondry } = require('./../models/teacherSecondary');
const { teachersNotificaton } = require('./../models/teacherNotifications');
const { StudentPrimary } = require('./../models/studentPrimary');
const { StudentSecondry } = require('./../models/studentsSecondry');
const {
  pickTeacher,
  pickWork,
  pickEducation,
  loginLocal,
  removeTokenMinimal,
  authTokenMinimal,
  updateMinimal,
  pickTechnicalSkills,
  pickSpecialisations,
  deleteMinimal,
  deleteSecondaryMinimal,
  saveMinimal2,
  pickTeacherNotifications,
  pickCommittee,
} = require('./../utils/utils');

// Initializing the function for the Model
const saveTeacherMinimal = saveMinimal2(TeacherPrimary);
const login = loginLocal(TeacherPrimary);
const authTeacherMinimal = authTokenMinimal(TeacherPrimary);
const updateTeacherMinimal = updateMinimal(TeacherPrimary, true, false);
const deleteTeacherMinimal = deleteMinimal(TeacherPrimary);
const updateNotificationMinimal = updateMinimal(
  teachersNotificaton,
  true,
  false
);
const deleteNotificationMinimal = deleteMinimal(teachersNotificaton);

const updateSecondaryMinimal = updateMinimal(TeacherSecondry, false, true);
const deleteSecondary = deleteSecondaryMinimal(TeacherSecondry);

const saveNotificationsMinimal = saveMinimal2(teachersNotificaton);

// Controllers
const teacherRegister = async (req, res) => {
  const body = pickTeacher(req);
  try {
    const teacher = await saveTeacherMinimal(body);
    res.send(teacher);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const teacherLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await login(email, password);
    res.send(data);
  } catch (error) {
    res.status(400).send(`Some went wrong: ${error}`);
  }
};

const tokenTeacherAuthenticate = async (req, res, next) => {
  const { token } = req.body;
  try {
    const teacher = await authTeacherMinimal(token);
    if (teacher) {
      req.teacher = teacher;
      req.token = token;
      next();
    }
  } catch (error) {
    res.status(401).send(`Access Denied! ${error}`);
  }
};

const teacherLogout = async (req, res) => {
  const { teacher, token } = req;
  try {
    await removeTokenMinimal(teacher, token);
    res.sendStatus(200).send();
  } catch (error) {
    res.status(400).send(`Some went wrong: ${error}`);
  }
};

const teacherUpdate = async (req, res) => {
  const body = pickTeacher(req);
  try {
    const updatedStudent = await updateTeacherMinimal(
      { _id: req.teacher._id },
      {
        $set: { ...body },
      }
    );
    res.header('x-auth', req.header('x-auth')).send(updatedStudent);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const addWork = async (req, res) => {
  const body = pickWork(req);
  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.teacher._id },
      {
        $push: { ...body },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.status(400).send(`Something went wrong:${error}`);
  }
};

const updateWork = async (req, res) => {
  const body = pickWork(req);
  const { _id } = req.body;
  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.teacher._id, 'work._id': _id },
      {
        $set: {
          'work.$.title': body.work.title,
          'work.$.description': body.work.description,
        },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.status(400).send(`Something went wrong:${error}`);
  }
};

const removeWork = async (req, res) => {
  const { _id } = req.body;

  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.teacher._id, 'work._id': _id },
      {
        $pull: { work: { _id } },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.sendStatus(400).send('Something went wrong');
  }
};

const addTeacherCommittee = async (req, res) => {
  const body = pickCommittee(req);

  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.teacher._id },
      {
        $push: { ...body },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.status(400).send(`Something went wrong: ${error}`);
  }
};

const updateTeacherCommittee = async (req, res) => {
  const body = pickCommittee(req);
  const { _id } = req.body;
  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.teacher._id, 'committee._id': _id },
      {
        $set: {
          'committee.$.name': body.committee.name,
          'committee.$.designation': body.committee.designation,
          'committee.$.status': body.committee.status,
        },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.status(400).send(`Something went wrong: ${error}`);
  }
};

const removeCommittee = async (req, res) => {
  const { _id } = req.body;
  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.teacher._id, 'committee._id': _id },
      {
        $pull: { committee: { _id } },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.sendStatus(400).send('Something went wrong');
  }
};

const addEducation = async (req, res) => {
  const body = pickEducation(req);
  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.teacher._id },
      {
        $set: { ...body },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.status(400).send(`Something went wrong: ${error}`);
  }
};

const addTechnicalSkills = async (req, res) => {
  const body = pickTechnicalSkills(req);
  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.teacher._id },
      {
        $set: { ...body },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.status(400).send(`Something went wrong: ${error}`);
  }
};

const addTeacherSpecialications = async (req, res) => {
  const body = pickSpecialisations(req);
  try {
    const updatedSecondary = await updateSecondaryMinimal(
      { _creator: req.teacher._id },
      {
        $set: { ...body },
      }
    );
    return res.send(updatedSecondary);
  } catch (error) {
    return res.status(400).send(`Something went wrong: ${error}`);
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const deletedTeacher = await deleteTeacherMinimal(req.teacher._id);
    await deleteSecondary(req.teacher._id);
    res.send(`Teacher has been deleted, ${deletedTeacher}`);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const addNotification = async (req, res) => {
  const body = pickTeacherNotifications(req);

  const newBody = {
    _creator: req.teacher._id,
    ...body,
  };

  try {
    const notification = await saveNotificationsMinimal(newBody);
    const { branch, rollNo, year } = notification.tags;
    const studentIds = await StudentPrimary.findAllIdByTags({
      branch,
      rollNo,
      year,
    });
    studentIds.forEach(async (_creator) => {
      await StudentSecondry.findOneAndUpdate(
        { _creator },
        {
          $push: { notifications: { _ref: notification._id } },
        }
      );
    });
    res.send(notification);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const getTeacherSecondary = async (req, res) => {
  const { _id } = req.teacher;

  try {
    const teacherSecondary = await TeacherSecondry.find({ _creator: _id });
    const notifications = await teachersNotificaton.find({ _creator: _id });
    res.send({ ...teacherSecondary, notifications });
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const updateNotification = async (req, res) => {
  const { _id } = req.teacher;
  const body = pickTeacherNotifications(req);
  if (body.file === null) {
    delete body.file;
  }

  try {
    const updatedNotification = await updateNotificationMinimal(
      {
        _creator: _id,
        _id: req.body._id,
      },
      {
        $set: { ...body },
      }
    );
    res.send(updatedNotification);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteNotification = async (req, res) => {
  const _creator = req.teacher._id;
  const { _id } = req.body;

  console.log(_id);
  console.log(_creator);

  try {
    const deleted = await deleteNotificationMinimal({
      _creator,
      _id,
    });
    res.send(deleted);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  teacherLogin,
  teacherLogout,
  tokenTeacherAuthenticate,
  teacherUpdate,
  addWork,
  updateWork,
  removeWork,
  addEducation,
  addTeacherSpecialications,
  addTechnicalSkills,
  deleteTeacher,
  addNotification,
  updateNotification,
  deleteNotification,
  teacherRegister,
  getTeacherSecondary,
  addTeacherCommittee,
  updateTeacherCommittee,
  removeCommittee,
};
