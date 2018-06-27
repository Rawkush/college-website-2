const request = require('supertest');
const { isMongoId } = require('validator');
const { app } = require('./../../../server');
const { Notifications } = require('./../../../models/notification');
const { notification } = require('./../../__fixtures__/Notifications');
const { populateDB } = require('./../../../utils/utils');
const {
  GET_ALL_NOTIFICATIONS,
  GET_NOTIFICATIONS,
} = require('./../../../utils/urls');

const populateNotifications = populateDB(Notifications);

describe('Visitor Routes - Notifications', () => {
  afterEach(() => Notifications.remove({}));
  describe(GET_ALL_NOTIFICATIONS, () => {
    describe('Test on single notification.', () => {
      beforeEach(() => populateNotifications([notification[0]]));
      test('match the object.', () =>
        request(app)
          .get(GET_ALL_NOTIFICATIONS)
          .then(({ body }) => {
            expect(body).toHaveLength(1);
            expect(body[0]).toMatchObject(notification[0]);
            expect(body[0]).toHaveProperty('createdAt');
            expect(body[0]).toHaveProperty('updatedAt');
            expect(body[0].tags).toEqual(notification[0].tags);
          }));
      test('contains essential properties.', () =>
        request(app)
          .get(GET_ALL_NOTIFICATIONS)
          .then(({ body }) => {
            expect(body[0]).toHaveProperty('createdAt');
            expect(body[0]).toHaveProperty('updatedAt');
            expect(body[0]).toHaveProperty('_id');
            expect(body[0]).toHaveProperty('__v');
          }));
      test('return a valid mongodb _id.', () =>
        request(app)
          .get(GET_ALL_NOTIFICATIONS)
          .then(({ body: [{ _id }] }) => expect(isMongoId(_id)).toBeTruthy()));
    });
    describe('Test on more than notifications.', () => {
      beforeEach(() => populateNotifications(notification));
      test('return 5 notifications.', () =>
        request(app)
          .get(GET_ALL_NOTIFICATIONS)
          .then(({ body }) => {
            expect(body).toHaveLength(5);
          }));
    });
  });
  describe(GET_NOTIFICATIONS, () => {
    describe('Test on 3 notifications.', () => {
      beforeEach(() => populateNotifications(notification));
      test('return 3 notifications.', () =>
        request(app)
          .get(GET_NOTIFICATIONS)
          .then(({ body }) => {
            expect(body).toHaveLength(3);
          }));
    });
  });
});
