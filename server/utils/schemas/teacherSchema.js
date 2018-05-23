const { celebrate, Joi } = require('celebrate');

const token = {
  token: Joi.string().required(),
};

const LoginValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required(),
  }),
});

const registerValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required(),
    dateOfBirth: Joi.date(),
    status: Joi.boolean(),
    gender: Joi.string()
      .trim()
      .empty(''),
    currentPosition: Joi.string(),
  }),
});

const authToken = (token) =>
  celebrate({
    body: Joi.object().keys({
      ...token,
    }),
  });

const addWork = (token) =>
  celebrate({
    body: Joi.object().keys({
      title: Joi.string()
        .min(5)
        .required(),
      description: Joi.string()
        .min(20)
        .required(),
      ...token,
    }),
  });

const removeWork = (token) =>
  celebrate({
    body: Joi.object().keys({
      _id: Joi.string().required(),
      ...token,
    }),
  });

const addEducation = (token) =>
  celebrate({
    body: Joi.object().keys({
      type: Joi.string(),
      required: Joi.boolean(),
      ...token,
    }),
  });

const addTechnicalSkills = (token) =>
  celebrate({
    body: Joi.object().keys({
      type: Joi.string(),
      ...token,
    }),
  });

const addSpecialisations = (token) =>
  celebrate({
    body: Joi.object().keys({
      type: Joi.string(),
      ...token,
    }),
  });

const addCommittee = (token) =>
  celebrate({
    body: Joi.object().keys({
      name: Joi.string(),
      designation: Joi.string(),
      status: Joi.string(),
    }),
  });
const removeCommittee = (token) =>
  celebrate({
    body: Joi.object().keys({
      _id: Joi.string().required(),
      ...token,
    }),
  });

const authTokenValidate = authToken(token);
const addWorkValidate = addWork(token);
const addEducationValidate = addEducation(token);
const addTechnicalSkillsValidate = addTechnicalSkills(token);
const addSpecialisationsValidate = addSpecialisations(token);
const removeWorkValidate = removeWork(token);
const addCommitteeValidate = addCommittee(token);
const removeCommitteeValidate = removeCommittee(token);

module.exports = {
  LoginValidate,
  registerValidate,
  authTokenValidate,
  addWorkValidate,
  addEducationValidate,
  addTechnicalSkillsValidate,
  addSpecialisationsValidate,
  removeWorkValidate,
  addCommitteeValidate,
  removeCommitteeValidate,
};
