const request = require('supertest');
const { app } = require('./../../../server');
const { Notifications } = require('./../../../models/notification');
const { notification } = require('./../../__fixtures__/Notifications');
const { populateDB } = require('./../../../utils/utils');
const { GET_ALL_NOTIFICATIONS } = require('./../../../utils/urls');

const populateNotifications = populateDB(Notifications);

describe('Visitor Routes - Notifications', () => {
  beforeEach(() => populateNotifications([notification]));
  afterEach(() => Notifications.remove({}));
  describe(GET_ALL_NOTIFICATIONS, () => {
    test('Get all notification.', () => {
      request(app)
        .get(GET_ALL_NOTIFICATIONS)
        .expect((res) => {
          expect(res.body).toHaveLength(1);
        });
    });
  });
});
