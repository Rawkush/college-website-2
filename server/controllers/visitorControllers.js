// Defined Module Import
const { Event } = require('./../models//events');
const { Notifications } = require('./../models/notification');
const { StudentPrimary } = require('./../models/studentPrimary');
const { StudentSecondry } = require('./../models/studentsSecondry');
// const { TeacherPrimary } = require('./../models/teacherPrimary');
const { Syllabus } = require('./../models/syllabus');
const { TimeTable } = require('./../models/timeTable');

const {
  giveLatestThreeItem,
  findUser,
  giveUser,
  giveAll,
  giveUserSecondary,
} = require('./../utils/utils');

// Initializing the Instances of Model
const giveLatestThreeNotifications = giveLatestThreeItem(Notifications);
const giveAllNotifications = giveAll(Notifications);
const giveLatestThreeEvents = giveLatestThreeItem(Event);
const findStudentByName = findUser(StudentPrimary, 'name');
const findStudentByRollNo = findUser(StudentPrimary, 'rollNo');
const giveStudent = giveUser(StudentPrimary);
const giveAllSyllabus = giveAll(Syllabus);
const giveAllTimeTable = giveAll(TimeTable);
const giveAllEvents = giveAll(Event);
const giveStudentSecondary = giveUserSecondary(StudentSecondry);

const getLatestNotifications = async (req, res) => {
  try {
    const notifications = await giveLatestThreeNotifications();
    res.send(notifications);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

const getAllNotifications = async (req, res) => {
  try {
    const notifications = await giveAllNotifications();
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

    const studentsSeconadry = await giveStudentSecondary(student.toJSON());
    res.send({ ...student.toJSON(), ...studentsSeconadry.toJSON() });
  } catch (error) {
    res.send(`Something Went Wrong: ${error}`);
  }
};

const getTeacher = async (req, res) => {
  // const { slugg } = req.body;
  // try {
  //   const teacher = await giveTeacher(slugg);
  //   res.send(teacher);
  // } catch (error) {
  //   res.send(`Something Went Wrong: ${error}`);
  // }
};

const getSyllabus = async (req, res) => {
  try {
    const syllabus = await giveAllSyllabus();
    res.send(syllabus);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

const getTimeTable = async (req, res) => {
  try {
    const timeTable = await giveAllTimeTable();
    res.send(timeTable);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await giveAllEvents();
    res.send(events);
  } catch (error) {
    res.send(404).send(`Something Went Wrong: ${error}`);
  }
};

// const getAllStudentSecondaryData = async (req, res) => {
//   const { _creator } = req.body;
//   try {
//     const secondarydata = await giveAllStudentSecondary(_creator);
//     res.send(secondarydata);
//   } catch (error) {
//     res.status(401).send(`Some error happened: ${error}`);
//   }
// };

const searchStudentsByName = async (req, res) => {
  const { name } = req.body;
  try {
    const searchResults = await findStudentByName(name);
    res.send(searchResults);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

const searchStudentsByRollNo = async (req, res) => {
  const { rollNo } = req.body;
  try {
    const searchResults = await findStudentByRollNo(rollNo);
    res.send(searchResults);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

module.exports = {
  getLatestNotifications,
  getAllNotifications,
  getLatestEvents,
  getStudent,
  getTeacher,
  getSyllabus,
  getTimeTable,
  getAllEvents,
  searchStudentsByName,
  searchStudentsByRollNo,
};
