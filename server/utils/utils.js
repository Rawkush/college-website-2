// Global Imports
const _ = require('lodash');

//  Minimal Functions
const pickBody = (req) => {
  const body = _.pick(req.body, [
    'name',
    'rollNo',
    'location',
    'dateOfBirth',
    'gender',
    'email',
    'addmittedIn',
    'bio',
    'photo',
    'authId',
  ]);
  return body;
};

const pickAccomplishments = (req) => {
  const accomplishments = _.pick(req.body, ['title', 'description']);
  return { accomplishments };
};

const pickProjects = (req) => {
  const projects = _.pick(req.body, ['title', 'description']);
  return { projects };
};

const pickSpecialisations = (req) => {
  const specialisations = _.pick(req.body, ['specialisation']);
  if (!Array.isArray(specialisations.specialisation)) {
    return null;
  }
  return { ...specialisations };
};

const saveMinimal = (Model) => async (body) => {
  const newUser = new Model(body);

  try {
    const user = await newUser.save();
    const token = await newUser.generateAuthToken();
    return {
      user,
      token,
    };
  } catch (error) {
    throw new Error(error);
  }
};

const updateMinimal = (Model, runValidators, upsert) => async (
  condition,
  body
) => {
  try {
    const data = await Model.findOneAndUpdate(
      { ...condition },
      { ...body },
      {
        new: true,
        runValidators,
        upsert,
      }
    );
    return data;
  } catch (error) {
    throw new Error('Cannot Update:', error);
  }
};

const authTokenMinimal = async (Model, token) => {
  try {
    const student = await Model.findByToken(token);
    return student;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteStudentMinimal = async (Model, id) => {
  try {
    const deletedStudent = await Model.findByIdAndRemove(id);
    return deletedStudent;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  pickBody,
  pickAccomplishments,
  pickProjects,
  pickSpecialisations,
  saveMinimal,
  updateMinimal,
  authTokenMinimal,
  deleteStudentMinimal,
};
