const request = require('supertest');
const { app } = require('./../../server');

// ---  Importing Models---

const { Notifications } = require('./../../models/notification');
const { questionBank } = require('./../../models/questionBank');
const { Event } = require('./../../models/events');
const { Syllabus } = require('./../../models/syllabus');
const { TimeTable } = require('./../../models/timeTable');
// -- importing the utils functions ---
const { saveMinimal2 } = require('./../../utils/utils');
// const { giveLatestThreeItem } = require('./../../utils/utils');
// ------ importing urls ----

const {
  getnotifications,
  getallnotifications,
  getallQuestionPaper,
  getevents,
  getallevents,
  getsyll,
  gettt,
  // getteacher,
  // getstudent,
  // searchstudentbyname,
  // searchstudentbyrollno,
  // verifyemail,
} = require('./../../utils/urls');

// ----- making the dumy body object -----

const notification = {
  title: 'Voluptatum ',
  description: 'Neque ',
  file: 'http:',
  tags: ['tag1'],
  link: 'https',
};

const questionPaper = {
  subject: 'maths',
  year: '2018',
  semester: '4th sem',
  branch: 'it',
  link: 'httpskjdf',
};

const event = {
  name: 'shubham birthday',
  place: 'nlksdjsdfn',
  description:
    ' Lorem Ipsum is simply dummy text of the printing and Ipsum is simply dummy text of the printing and Ipsum is simply dummy text of the printing and Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry ',
};

const syllabus = {
  branch: 'it branch ',
  codeNo: '20150',
  semester: '4',
  subject: 'maths',

  l: '2524',
  tp: '422',
  credits: '24524',
  status: 'dskfjfkd',
  period: 'fgsdhgfdsgh',
  file: 'fdhfdshdsh',
};

const timetable = {
  branch: 'it',
  semester: 'gfhfghfg',
  title: 'hgfgdhfhf',
  file: 'dgfdgg',
};

// -- saving th models to
const saveQuestionPaperMinimal = saveMinimal2(questionBank);
const saveNotificationsMinimal = saveMinimal2(Notifications);
const saveEvent = saveMinimal2(Event);
const saveSyllabus = saveMinimal2(Syllabus);
const saveTimetable = saveMinimal2(TimeTable);
afterAll(() => {
  app.server.close();
});

// ------- ------test starts from here ------------------

describe('-- testing the visitors routes ', () => {
  // --- functions for notification---
  beforeEach(() => saveNotificationsMinimal(notification));
  beforeEach(() => saveNotificationsMinimal(notification));
  beforeEach(() => saveNotificationsMinimal(notification));
  afterEach(() => Notifications.remove({}));

  // --- functions for question paper ---
  beforeEach(() => saveQuestionPaperMinimal(questionPaper));
  afterEach(() => questionBank.remove({}));

  // --- functions for question paper ---
  beforeEach(() => saveEvent(event));
  beforeEach(() => saveEvent(event));
  beforeEach(() => saveEvent(event));
  beforeEach(() => saveEvent(event));
  afterEach(() => Event.remove({}));

  // --- functions for syllabus ---
  beforeEach(() => saveSyllabus(syllabus));
  afterEach(() => Syllabus.remove({}));

  // --- functions for syllabus ---
  beforeEach(() => saveTimetable(timetable));
  afterEach(() => TimeTable.remove({}));

  //------------------------------------------------------

  test('get all notification', (done) => {
    request(app)
      .get(getallnotifications)
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

  test('get all question paper ', (done) => {
    request(app)
      .get(getallQuestionPaper)
      .expect((res) => {
        expect(res.body).toHaveLength(1);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });

  test('get all events ', (done) => {
    request(app)
      .get(getallevents)
      .expect((res) => {
        expect(res.body).toHaveLength(4);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });

  test('get latest 3  events ', (done) => {
    request(app)
      .get(getevents)
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

  test('get syllabus ', (done) => {
    request(app)
      .get(getsyll)
      .expect((res) => {
        expect(res.body).toHaveLength(1);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
  test('get timetable ', (done) => {
    request(app)
      .get(gettt)
      .expect((res) => {
        expect(res.body).toHaveLength(1);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});
