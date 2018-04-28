const request = require('supertest');
const { app } = require('./../../server');

//  Importing Models

const { Notifications } = require('./../../models/notification');
const { saveMinimal2 } = require('./../../utils/utils');

// ------ importing urls ----

const {
  getnotifications,
  // getallnotifications,
  // getallQuestionPaper,
  // getevents,
  // getallevents,
  // getsyll,
  // gettt,
  // getteacher,
  // getstudent,
  // searchstudentbyname,
  // searchstudentbyrollno,
  // verifyemail,
} = require('./../../utils/urls');

const notification = {
  title: 'Voluptatum ',
  description: 'Neque ',
  file: 'http:',
  tags: ['tag1'],
  link: 'https',
};

const saveNotificationsMinimal = saveMinimal2(Notifications);

afterAll(() => {
  app.server.close();
});

beforeEach(() => saveNotificationsMinimal(notification));

afterEach(() => Notifications.remove({}));

describe('-- testing the visitors routes ', () => {
  beforeEach(() => saveNotificationsMinimal(notification));
  beforeEach(() => saveNotificationsMinimal(notification));
  beforeEach(() => saveNotificationsMinimal(notification));
  beforeEach(() => saveNotificationsMinimal(notification));
  afterEach(() => Notifications.remove({}));
  test('get all notification', (done) => {
    console.log('1  test run');
    request(app)
      .get(getnotifications)
      .expect((res) => {
        expect(res.body).toHaveLength(3);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });

  test('get all 3 latest notificaionts', (done) => {
    console.log('2  test run');
    request(app)
      .get('/s/visitor/getnotifications')
      .expect((res) => {
        expect(res.body).toHaveLength(3);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});
