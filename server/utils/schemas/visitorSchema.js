const { celebrate, Joi } = require('celebrate');

const getStudentValidate = celebrate({
  body: Joi.object().keys({
    slugg: Joi.string().lowercase(),
  }),
});

const searchByNameValidate = celebrate({
  body: Joi.object().keys({
    name: Joi.string()
      .min(1)
      .trim()
      .required(),
  }),
});

const searchByRollValidate = celebrate({
  body: Joi.object().keys({
    rollNo: Joi.number()
      .min(15)
      .max(16)
      .required(),
  }),
});

const verifyEmailValidate = celebrate({
  body: Joi.object().keys({
    email: Joi.string()
      .email()
      .min(1)
      .required(),
  }),
});
module.exports = {
  getStudentValidate,
  searchByNameValidate,
  searchByRollValidate,
  verifyEmailValidate,
};
