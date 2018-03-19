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
    'branch',
    'admittedIn',
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
    'status',
    'currentPosition',
  ]);
  if (req.file) {
    return { ...body, photo: req.file.path };
  }
  return body;
};

const pickNotifications = (req) => {
  const body = _.pick(req.body, ['title', 'description', 'link', 'tags']);
  const file = req.file ? req.file.path : null;
  const newBody = {
    ...body,
    file,
  };
  return newBody;
};

const pickTeacherNotifications = (req) => {
  const body1 = _.pick(req.body, [
    'title',
    'description',
    'link',
    'branch',
    'rollNo',
    'year',
  ]);
  const body2 = {
    title: body1.title,
    description: body1.description,
    link: body1.link,
    tags: {
      branch: body1.branch,
      rollNo: body1.rollNo,
      year: body1.year,
    },
  };
  const file = req.file ? req.file.path : null;
  const newBody = {
    ...body2,
    file,
  };
  return newBody;
};

const pickAccomplishments = (req) => {
  const accomplishments = _.pick(req.body, ['title', 'description']);
  const photo = req.file ? req.file.path : null;
  return { ...accomplishments, photo };
};

const pickProjects = (req) => {
  const projects = _.pick(req.body, ['title', 'description', 'link']);
  const photos = req.files ? req.files.map((file) => file.path) : null;
  return { ...projects, photos };
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

const pickCommittee = (req) => {
  const committee = _.pick(req.body, ['name', 'designation', 'status']);
  return { committee };
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

const loginAdmin = (Model) => async (username, password) => {
  try {
    const user = await Model.findAdmin(username, password);
    const token = await user.generateAuthToken();
    return { user: user.toJSON(), token };
  } catch (error) {
    throw new Error(error);
  }
};

const pickEvent = (req) => {
  const body = _.pick(req.body, [
    'name',
    'date',
    'type',
    'place',
    'description',
  ]);
  const photos = req.files ? req.files.map((file) => file.path) : null;
  const newBody = {
    ...body,
    photos,
  };
  return newBody;
};

const pickSyllabus = (req) => {
  const body = _.pick(req.body, [
    'branch',
    'semester',
    'codeNo',
    'subject',
    'l',
    'tp',
    'credits',
    'status',
    'period',
    'file',
    'type',
  ]);
  const file = req.file ? req.file.path : null;
  const newBody = {
    ...body,
    file,
  };
  return newBody;
};

const pickTT = (req) => {
  const body = _.pick(req.body, ['branch', 'semester', 'wef', 'title']);
  const file = req.file ? req.file.path : null;
  const newBody = {
    ...body,
    file,
  };
  return newBody;
};

const giveLatestThreeItem = (Model) => async () => {
  try {
    const thing = await Model.find({})
      .sort({ createdAt: -1 })
      .limit(3)
      .exec();
    return thing;
  } catch (error) {
    throw new Error(error);
  }
};

const giveAll = (Model) => async () => {
  try {
    const things = await Model.find({}).sort({ createdAt: -1 });
    return things;
  } catch (error) {
    throw new Error(error);
  }
};

const giveAllSecondary = (Model) => async (_creator) => {
  try {
    const things = await Model.find({ _creator }).populate({
      path: 'notifications._ref',
      populate: { path: '_creator' },
    });
    return things;
  } catch (error) {
    throw new Error(error);
  }
};

const giveUserBySlugg = (Model) => async (slugg) => {
  try {
    const user = await Model.findBySlug(slugg);
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const giveUserSecondary = (Model) => async ({ _id }) => {
  try {
    const secondary = await Model.findOne({ _creator: _id });
    if (!secondary) {
      return {};
    }
    return secondary.toJSON();
  } catch (error) {
    throw new Error(error);
  }
};

const giveUserByName = (Model) => async (name) => {
  try {
    const user = await Model.find({
      $text: {
        $search: name,
      },
    });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const pickAdmin = (req) => {
  const body = _.pick(req.body, ['username', 'password', 'email']);
  return body;
};

const findUser = (Model, field) => async (searchField) => {
  try {
    const results = await Model.find({
      [field]: new RegExp(searchField, 'i'),
    });
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

const giveUser = (Model) => async (slugg) => {
  try {
    const student = await Model.findOne({ slugg });
    if (!student) {
      return {};
    }
    return student.toJSON();
  } catch (error) {
    throw new Error(error);
  }
};

const findEmail = (Model) => async (email) => {
  try {
    const result = await Model.findOne({ email });
    return result ? result.toJSON() : null;
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
  pickEvent,
  pickSyllabus,
  pickTT,
  giveUser,
  giveUserSecondary,
  giveLatestThreeItem,
  giveUserBySlugg,
  giveAll,
  giveAllSecondary,
  pickAdmin,
  loginAdmin,
  pickTeacherNotifications,
  pickCommittee,
  giveUserByName,
  findUser,
  findEmail,
};
