const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const slug = require('slug');

function toJSON() {
  const user = this;
  const userObject = user.toObject();
  return _.pick(userObject, [
    '_id',
    'name',
    'rollNo',
    'location',
    'branch',
    'email',
    'gender',
    'admittedIn',
    'dateOfBirth',
    'bio',
    'photo',
    'linkedProfiles',
  ]);
}

function generateAuthToken() {
  const user = this;
  const access = 'auth';
  const token = jwt
    .sign(
      {
        _id: user._id.toHexString(),
        access,
      },
      process.env.JWT_SECRET
    )
    .toString();
  user.tokens = user.tokens.concat([{ access, token }]);
  return user.save().then(() => token);
}

function findByToken(token) {
  const User = this;
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (e) {
    return Promise.reject();
  }
  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth',
  });
}

function decodeProviderAndId(token) {
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET_2);
  } catch (e) {
    return Promise.reject();
  }
  return decoded;
}

function checkPassword(next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (error, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
}

function checkPasswordStonger(next) {
  const user = this;
  if (user.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, (error, hash) => {
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
}

function findByCredentials(email, password) {
  const User = this;
  return User.findOne({ email }).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
}

function findAdmin(username, password) {
  const User = this;
  return User.findOne({ username }).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    return new Promise((resolve, reject) => {
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          resolve(user);
        } else {
          reject();
        }
      });
    });
  });
}

function removeToken(token) {
  const user = this;
  return user.update({
    $pull: {
      tokens: { token },
    },
  });
}

function findByProviderAndId(token) {
  const User = this;
  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET_2);
  } catch (e) {
    return Promise.reject();
  }
  const { provider, id } = decoded;

  return User.findOne({
    'auth.provider': provider,
    'auth.providerId': id,
  });
}
function slugGen(next) {
  const user = this;
  if (user.isModified('name')) {
    const slugg = slug(user.name);
    user.slugg = slugg;
    next();
  } else {
    next();
  }
}
function findBySlug(slugg) {
  const User = this;
  return User.findOne({ slugg });
}
module.exports = {
  toJSON,
  generateAuthToken,
  findByToken,
  decodeProviderAndId,
  findByCredentials,
  checkPassword,
  checkPasswordStonger,
  removeToken,
  findByProviderAndId,
  slugGen,
  findBySlug,
  findAdmin,
};
