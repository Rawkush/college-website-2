// Global Imports
const _ = require('lodash');

//  Minimal Functions
const pickBody = (req) => {
  const body = _.pick(req.body.userData, [
    'name',
    'rollNo',
    'location',
    'dateOfBirth',
    'gender',
    'email',
    'addmittedIn',
    'bio',
    'photo',
    'linkedProfiles',
  ]);
  return body;
};

const pickTeacher = (req) => {
  const body = _.pick(req.body, [
    'name',
    'email',
    'password',
    'dateOfBirth',
    'gender',
    'currentPosition',
    'photo',
  ]);
  return body;
};

const pickNotifications = (req) => {
  const body = _.pick(req.body, ['title', 'description', 'link']);
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

const pickWork = (req) => {
  const work = _.pick(req.body, ['title', 'description']);
  return { work };
};

const pickEducation = (req) => {
  const education = _.pick(req.body, ['education']);
  if (!Array.isArray(education.education)) {
    return null;
  }
  return { ...education };
};

const pickTechnicalSkills = (req) => {
  const technicalSkills = _.pick(req.body, ['technicalSkills']);
  if (!Array.isArray(technicalSkills.technicalSkills)) {
    return null;
  }
  return { ...technicalSkills };
};

const generateAuthToken = async (user) => {
  try {
    const token = await user.generateAuthToken();
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

const decodeAuthTokenMinimal = (Model) => async (providedToken) => {
  let decoded;
  try {
    decoded = await Model.decodeProviderAndId(providedToken);
    return decoded;
  } catch (e) {
    throw new Error(e);
  }
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

const saveMinimal2 = (Model) => async (body) => {
  const newUser = new Model(body);
  try {
    const user = await newUser.save();
    return user;
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
    throw new Error(`Cannot Update: ${error}`);
  }
};

const authTokenMinimal = (Model) => async (token) => {
  try {
    const student = await Model.findByToken(token);
    return student;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteMinimal = (Model) => async (id) => {
  try {
    const deletedUser = await Model.findByIdAndRemove(id);
    return deletedUser;
  } catch (error) {
    throw new Error(error);
  }
};

const checkUserMinimal = (Model) => async (token) => {
  try {
    const student = await Model.findByProviderAndId(token);
    if (student) {
      return student;
    }
    return false;
  } catch (error) {
    return false;
  }
};

const removeTokenMinimal = async (user, token) => {
  try {
    await user.removeToken(token);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteSecondaryMinimal = (Model) => async (_id) => {
  try {
    await Model.findOneAndRemove({ _creator: _id });
  } catch (error) {
    throw new Error(error);
  }
};

const loginLocal = (Model) => async (email, password) => {
  try {
    const user = await Model.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    return { user: user.toJSON(), token };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  pickBody,
  pickTeacher,
  pickNotifications,
  pickAccomplishments,
  pickProjects,
  pickSpecialisations,
  pickWork,
  pickEducation,
  pickTechnicalSkills,
  decodeAuthTokenMinimal,
  saveMinimal,
  saveMinimal2,
  updateMinimal,
  authTokenMinimal,
  deleteMinimal,
  checkUserMinimal,
  generateAuthToken,
  removeTokenMinimal,
  deleteSecondaryMinimal,
  loginLocal,
};
