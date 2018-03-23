//  Global imports
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const _ = require('lodash');
const GitHubStrategy = require('passport-github2').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const jwt = require('jsonwebtoken');

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' }); // eslint-disable-line
}

const googleOptions = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/s/student/auth/google/callback',
  passReqToCallback: true,
};

const linkedInOptions = {
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: '/s/student/auth/linkedin/callback',
  scope: ['r_emailaddress', 'r_basicprofile'],
  passReqToCallback: true,
};

const gitHubOptions = {
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: '/s/student/auth/github/callback',
  passReqToCallback: true,
};

const callbackFunction = (req, accessToken, refreshToken, profile, done) => {
  const body = _.pick(profile, [
    'provider',
    'id',
    'profileUrl',
    'displayName',
    'gender',
    'name',
    'emails',
    'photos',
    '_json.bio',
    '_json.url',
    '_json.headline',
    '_json.location',
    '_json.publicProfileUrl',
  ]);

  if (!body._json) {
    body._json = {};
  }

  const payload = _.pick(profile, ['provider', 'id']);

  const token = jwt.sign(payload, process.env.JWT_SECRET_2).toString();

  const giveLocation = (object) => {
    if (object._json.location) {
      return object._json.location.name
        ? object._json.location.name
        : object._json.location;
    }
    return null;
  };

  const userData = {
    name: body.displayName,
    email: body.emails ? body.emails[0].value : null,
    gender: body.gender,
    photo: body.photos[0] ? body.photos[0].value : null,
    bio: body._json.bio || body._json.headline,
    location: giveLocation(body),
    linkedProfiles: [
      {
        provider: body.provider,
        linkedId: body.id,
        url: body.profileUrl || body._json.url || body._json.publicProfileUrl,
      },
    ],
  };

  done(null, { userData, token });
};

const googleConfig = new GoogleStrategy(googleOptions, callbackFunction);
const gitHubConfig = new GitHubStrategy(gitHubOptions, callbackFunction);
const linkedInConfig = new LinkedInStrategy(linkedInOptions, callbackFunction);

passport.use(googleConfig);
passport.use(gitHubConfig);
passport.use(linkedInConfig);

module.exports = passport;
