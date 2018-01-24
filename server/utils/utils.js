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

const generateAuthToken = async (student) => {
  try {
    const token = await student.generateAuthToken();
    return token;
  } catch (error) {
    throw new Error(error);
  }
};

const saveMinimal = (Model) => async (body, providedToken) => {
  let decoded;
  try {
    decoded = Model.decodeProviderAndId(providedToken);
  } catch (e) {
    throw new Error(e);
  }
  const { id, provider } = decoded;
  const newBody = {
    ...body,
    auth: {
      provider,
      providerId: id,
    },
  };
  const newUser = new Model(newBody);

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

const authTokenMinimal = (Model) => async (token) => {
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

module.exports = {
  pickBody,
  pickAccomplishments,
  pickProjects,
  pickSpecialisations,
  saveMinimal,
  updateMinimal,
  authTokenMinimal,
  deleteStudentMinimal,
  checkUserMinimal,
  generateAuthToken,
  removeTokenMinimal,
  deleteSecondaryMinimal,
};
