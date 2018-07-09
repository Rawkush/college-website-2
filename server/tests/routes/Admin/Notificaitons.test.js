const request = require('supertest');
const { app } = require('./../../../server');
const { Admin } = require('./../../../models/admin');

const { ADD_NOTIFICATION } = require('./../../../utils/urls');
const {
  notification: [firstNotification],
} = require('./../../__fixtures__/Notifications');

let token;

beforeEach(() => {
  const admin = new Admin({
    username: 'tempAdmin',
    email: 'admin@test.com',
    password: 12345678,
  });
  return admin
    .save()
    .then(() => admin.generateAuthToken())
    .then((receivedToken) => {
      token = receivedToken;
      return Promise.resolve();
    });
});

afterEach(() => Admin.remove({}));

describe('Admin Routes - Notifications', () => {
  describe(ADD_NOTIFICATION, () => {
    test('Add the notification w/o file.', () =>
      request(app)
        .post(ADD_NOTIFICATION)
        .field('token', token)
        .field('title', firstNotification.title)
        .field('description', firstNotification.description)
        .field('link', firstNotification.link)
        .field('tags', firstNotification.tags)
        .then(({ body }) => {
          expect(body).toMatchObject({ ...firstNotification, file: null });
        }));
  });
});
