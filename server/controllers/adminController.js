// Defined Module Import
const { TeacherPrimary } = require('./../models/teacherPrimary');
const { pickTeacher, saveMinimal2 } = require('./../utils/utils');

// Initializing the functions
const saveTeacherMinimal = saveMinimal2(TeacherPrimary);

const teacherRegister = async (req, res) => {
  const body = pickTeacher(req);
  try {
    const teacher = await saveTeacherMinimal(body);
    res.send(teacher);
  } catch (error) {
    res.status(400).send(`Some error happened: ${error}`);
  }
};

module.exports = {
  teacherRegister,
};
