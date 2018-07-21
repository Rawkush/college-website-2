const otpGenerator = require('otp-generator');
const { E500 } = require('../middleware/async');
const { doEmail } = require('./../config/nodemailerConfig');
const { Event } = require('./../models//events');
const { Notifications } = require('./../models/notification');
const { StudentPrimary } = require('./../models/studentPrimary');
const { StudentSecondry } = require('./../models/studentsSecondry');
const { Email } = require('./../models/email');
const { EmailOtp } = require('./../models/email&otp');
// const { TeacherPrimary } = require('./../models/teacherPrimary');
const { Syllabus } = require('./../models/syllabus');
const { TimeTable } = require('./../models/timeTable');
const { questionBank } = require('./../models/questionBank');

const {
  giveLatestThreeItem,
  findUser,
  giveUser,
  giveAll,
  giveUserSecondary,
  findEmail,
  updateMinimal,
} = require('./../utils/utils');

// Initializing the Instances of Model
const giveLatestThreeNotifications = giveLatestThreeItem(Notifications);
const giveAllQuestionPaper = giveAll(questionBank);
const giveAllNotifications = giveAll(Notifications);
const giveLatestThreeEvents = giveLatestThreeItem(Event);
const findStudentByName = findUser(StudentPrimary, 'name');
const findStudentByRollNo = findUser(StudentPrimary, 'rollNo');
const giveStudent = giveUser(StudentPrimary);
const giveAllSyllabus = giveAll(Syllabus);
const giveAllTimeTable = giveAll(TimeTable);
const giveAllEvents = giveAll(Event);
const giveStudentSecondary = giveUserSecondary(StudentSecondry);
const SaveEmailOtp = updateMinimal(EmailOtp, true, true);
const findEmailExist = findEmail(Email);

const getLatestNotifications = E500(async (req, res) => {
  const notifications = await giveLatestThreeNotifications();
  res.send(notifications);
});

const getAllNotifications = async (req, res) => {
  const notifications = await giveAllNotifications();
  res.send(notifications);
};

const getAllQuesetionPaper = async (req, res) => {
  const questionPapers = await giveAllQuestionPaper();
  res.send(questionPapers);
};

const getLatestEvents = async (req, res) => {
  const events = await giveLatestThreeEvents();
  res.send(events);
};

const getStudent = async (req, res) => {
  const { slugg } = req.body;
  const student = await giveStudent(slugg);

  const studentsSeconadry = await giveStudentSecondary(student);
  res.send({ ...student, ...studentsSeconadry });
};

const getTeacher = async (/* req, res */) => {
  // const { slugg } = req.body;
  // try {
  //   const teacher = await giveTeacher(slugg);
  //   res.send(teacher);
  // } catch (error) {
  //   res.send(`Something Went Wrong: ${error}`);
  // }
};

const getSyllabus = async (req, res) => {
  const syllabus = await giveAllSyllabus();
  res.send(syllabus);
};

const getTimeTable = async (req, res) => {
  const timeTable = await giveAllTimeTable();
  res.send(timeTable);
};

const getAllEvents = async (req, res) => {
  const events = await giveAllEvents();
  res.send(events);
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
  const searchResults = await findStudentByName(name);
  res.send(searchResults);
};

const searchStudentsByRollNo = async (req, res) => {
  const { rollNo } = req.body;
  const searchResults = await findStudentByRollNo(rollNo);
  res.send(searchResults);
};

const verifyEmail = async (req, res) => {
  const { email } = req.body;
  const result = await findEmailExist(email);
  if (!result) {
    res
      .status(400)
      .send('Sorry there is no email that matches the email you gave.');
    return;
  }
  const otp = otpGenerator.generate(6, {
    upperCase: false,
    specialChars: false,
  });
  await SaveEmailOtp({ email }, { email, otp });
  await doEmail(email, otp);
  res.status(200).send('Email has been sent');
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
  verifyEmail,
  getAllQuesetionPaper,
};
