// Defined Module Import
const { Event } = require('./../models//events');
const { Notifications } = require('./../models/notification');
const { StudentPrimary } = require('./../models/studentPrimary');
const { TeacherPrimary } = require('./../models/teacherPrimary');
const { Syllabus } = require('./../models/syllabus');

const { giveLatestThreeItem, giveUser, giveAll } = require('./../utils/utils');

// Initializing the Instances of Model
const giveLatestThreeNotifications = giveLatestThreeItem(Notifications);
const giveLatestThreeEvents = giveLatestThreeItem(Event);
const giveStudent = giveUser(StudentPrimary);
const giveTeacher = giveUser(TeacherPrimary);
const giveAllSyllabus = giveAll(Syllabus);

const getLatestNotifications = async (req, res) => {
  try {
    const notifications = await giveLatestThreeNotifications();
    res.send(notifications);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

const getLatestEvents = async (req, res) => {
  try {
    const events = await giveLatestThreeEvents();
    res.send(events);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

const getStudent = async (req, res) => {
  const { slugg } = req.body;
  try {
    const student = await giveStudent(slugg);
    res.send(student);
  } catch (error) {
    res.send(`Something Went Wrong: ${error}`);
  }
};

const getTeacher = async (req, res) => {
  const { slugg } = req.body;
  try {
    const teacher = await giveTeacher(slugg);
    res.send(teacher);
  } catch (error) {
    res.send(`Something Went Wrong: ${error}`);
  }
};

const getSyllabus = async (req, res) => {
  try {
    const syllabus = await giveAllSyllabus();
    res.send(syllabus);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

module.exports = {
  getLatestNotifications,
  getLatestEvents,
  getStudent,
  getTeacher,
  getSyllabus,
};
