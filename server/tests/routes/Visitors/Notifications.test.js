const request = require('supertest');
const { app } = require('./../../../server');
const { Notifications } = require('./../../../models/notification');
const { notification } = require('./../../__fixtures__/Notifications');
const { populateDB } = require('./../../../utils/utils');
const { GET_ALL_NOTIFICATIONS } = require('./../../../utils/urls');

const populateNotifications = populateDB(Notifications);

describe('Visitor Routes - Notifications', () => {
  afterEach(() => Notifications.remove({}));
  describe(GET_ALL_NOTIFICATIONS, () => {
    describe('Test on single notification', () => {
      beforeEach(() => populateNotifications([notification[0]]));
      test('Get all notification.', () =>
        request(app)
          .get(GET_ALL_NOTIFICATIONS)
          .expect(({ body }) => {
            expect(body).toHaveLength(1);
            expect(body[0]).toMatchObject(notification[0]);
          }));
    });
  });
});
