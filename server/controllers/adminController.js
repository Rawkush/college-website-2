const { webPush } = require('./../config/webPush');

// Defined Module Import
const { TeacherPrimary } = require('./../models/teacherPrimary');
const { Event } = require('./../models/events');
const { Notifications } = require('./../models/notification');
const { Syllabus } = require('./../models/syllabus');
const { TimeTable } = require('./../models/timeTable');
const { Admin } = require('./../models/admin');
const { questionBank } = require('./../models/questionBank');
const { subscription } = require('./../models/subscription');

const {
  saveMinimal2,
  pickNotifications,
  pickEvent,
  pickSyllabus,
  pickTT,
  deleteMinimal,
  updateMinimal,
  pickAdmin,
  loginAdmin,
  authTokenMinimal,
  removeTokenMinimal,
  giveAll,
  pickQuestionPaper,
} = require('./../utils/utils');

// Initializing the functions
const saveQuestionPaperMinimal = saveMinimal2(questionBank);
const saveNotificaitonsMinimal = saveMinimal2(Notifications);
const saveEventsMinimal = saveMinimal2(Event);
const saveSyllabusMinimal = saveMinimal2(Syllabus);
const saveTimeTableMinimal = saveMinimal2(TimeTable);
const saveAdminMinimal = saveMinimal2(Admin);
const saveTeacherMinimal = saveMinimal2(TeacherPrimary);
const login = loginAdmin(Admin);
const adminAuthenticate = authTokenMinimal(Admin);

const updateNotifications = updateMinimal(Notifications, true, false);
const updateQuestionPaper = updateMinimal(questionBank, true, false);
const updateSyllabus = updateMinimal(Syllabus, true, false);
const updateEvents = updateMinimal(Event, true, false);
const updateTimeTable = updateMinimal(TimeTable, true, false);

const deleteTeacherMinimal = deleteMinimal(TeacherPrimary);
const deleteNotificaitonsMinimal = deleteMinimal(Notifications);
const deleteQuestionPaperMinimal = deleteMinimal(questionBank);
const deleteEventsMinimal = deleteMinimal(Event);
const deleteSyllabusMinimal = deleteMinimal(Syllabus);
const deleteTimeTableMinimal = deleteMinimal(TimeTable);

const giveAllTeachers = giveAll(TeacherPrimary);
const giveAllSubs = giveAll(subscription);

// Controllers

const registerTeacher = async (req, res) => {
  const { email, password } = req.body;
  try {
    const teacher = await saveTeacherMinimal({ email, password });
    res.send(teacher);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const deleteTeacher = async (req, res) => {
  const { _id } = req.body;
  try {
    const teacher = await deleteTeacherMinimal(_id);
    res.send(teacher);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const addNotifications = async (req, res) => {
  const body = pickNotifications(req);
  try {
    const notification = await saveNotificaitonsMinimal(body);
    const subs = await giveAllSubs();
    subs.map((pushConfig) =>
      webPush
        .sendNotification(
          pushConfig,
          JSON.stringify({
            title: notification.title,
            openUrl: notification.file || notification.link || '/',
          })
        )
        .catch(() => {})
    );
    res.send(notification);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const addQuestionPaper = async (req, res) => {
  const body = pickQuestionPaper(req);
  try {
    const questionPaper = await saveQuestionPaperMinimal(body);
    res.send(questionPaper);
  } catch (err) {
    res.status(400).send(`some error happened: ${err}`);
  }
};

const editNotifications = async (req, res) => {
  const { _id, removeFile } = req.body;
  const body = pickNotifications(req);

  if (removeFile === 'true') {
    body.file = null;
  } else if (body.file === null) {
    delete body.file;
  }
  try {
    const notifications = await updateNotifications({ _id }, { ...body });
    res.send(notifications);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const editQuestinoPaper = async (req, res) => {
  const { _id, removeFile } = req.body;
  const body = pickQuestionPaper(req);
  if (removeFile === 'true') {
    body.file = null;
  } else if (body.file === null) {
    delete body.file;
  }

  try {
    const notification = await updateQuestionPaper({ _id }, { ...body });
    res.send(notification);
  } catch (err) {
    res.status(400).send(`some error happened:${err}`);
  }
};

const deleteNotifications = async (req, res) => {
  const { _id } = req.body;
  try {
    const notification = await deleteNotificaitonsMinimal(_id);
    res.send(notification);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const deleteQuestionPaper = async (req, res) => {
  const { _id } = req.body;
  try {
    const questionPaper = await deleteQuestionPaperMinimal(_id);
    res.send(questionPaper);
  } catch (err) {
    res.status(400).send(`Some error happened: ${err}`);
  }
};

const addEvents = async (req, res) => {
  const body = pickEvent(req);
  try {
    const notification = await saveEventsMinimal(body);
    res.send(notification);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const editEvent = async (req, res) => {
  const { _id } = req.body;
  const body = pickEvent(req);
  try {
    const event = await updateEvents({ _id }, { ...body });
    res.send(event);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const deleteEvents = async (req, res) => {
  const { _id } = req.body;
  try {
    const event = await deleteEventsMinimal(_id);
    res.send(event);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const addSyllabus = async (req, res) => {
  const body = pickSyllabus(req);
  try {
    const syllabus = await saveSyllabusMinimal(body);
    res.send(syllabus);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const editSyllabus = async (req, res) => {
  const { _id } = req.body;
  const body = pickSyllabus(req);
  if (body.file === null) {
    delete body.file;
  }

  try {
    const syllabus = await updateSyllabus({ _id }, { ...body });
    res.send(syllabus);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const deleteSyllabus = async (req, res) => {
  const { _id } = req.body;
  try {
    const syllabus = await deleteSyllabusMinimal(_id);
    res.send(syllabus);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const addTimeTable = async (req, res) => {
  const body = pickTT(req);
  try {
    const timeTable = await saveTimeTableMinimal(body);
    res.send(timeTable);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const editTimeTable = async (req, res) => {
  const { _id } = req.body;
  const body = pickTT(req);
  if (body.file === null) {
    delete body.file;
  }
  try {
    const timeTable = await updateTimeTable({ _id }, { ...body });
    res.send(timeTable);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const deleteTimeTable = async (req, res) => {
  const { _id } = req.body;
  try {
    const timeTable = await deleteTimeTableMinimal(_id);
    res.send(timeTable);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const adminRegister = async (req, res) => {
  const body = pickAdmin(req);
  try {
    const admin = await saveAdminMinimal(body);
    res.send(admin);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  try {
    const data = await login(username, password);
    res.send(data);
  } catch (error) {
    res.status(400).send(`Some went wrong: ${error}`);
  }
};

const adminLogout = async (req, res) => {
  const { token } = req.body;
  const { admin } = req;
  try {
    const data = await removeTokenMinimal(admin, token);
    res.send(data);
  } catch (error) {
    res.status(400).send(`Some went wrong: ${error}`);
  }
};

const tokenAuthenticate = async (req, res, next) => {
  const { token } = req.body;
  try {
    const admin = await adminAuthenticate(token);
    if (admin) {
      req.admin = admin;
      req.token = token;
      next();
    }
  } catch (error) {
    res.status(401).send(`Access Denied! ${error}`);
  }
};

const giveAllTeachersList = async (req, res) => {
  try {
    const teachersList = await giveAllTeachers();
    res.send(teachersList);
  } catch (error) {
    res.status(401).send(`Access Denied! ${error}`);
  }
};

module.exports = {
  addNotifications,
  deleteQuestionPaper,
  addQuestionPaper,
  editQuestinoPaper,
  editNotifications,
  deleteNotifications,
  addEvents,
  editEvent,
  deleteEvents,
  addSyllabus,
  editSyllabus,
  deleteSyllabus,
  addTimeTable,
  editTimeTable,
  deleteTimeTable,
  deleteTeacher,
  adminRegister,
  adminLogin,
  adminLogout,
  tokenAuthenticate,
  registerTeacher,
  giveAllTeachersList,
};
