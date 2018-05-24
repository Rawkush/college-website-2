const request = require('supertest');
const { app } = require('./../../server');

// ---  Importing Models---

const { Notifications } = require('./../../models/notification');
const { questionBank } = require('./../../models/questionBank');
const { Event } = require('./../../models/events');
const { Syllabus } = require('./../../models/syllabus');
const { TimeTable } = require('./../../models/timeTable');
const { StudentPrimary } = require('./../../models/studentPrimary');
// -- importing the utils functions ---
const { saveMinimal2, saveMinimal } = require('./../../utils/utils');

// const { giveLatestThreeItem } = require('./../../utils/utils');
// ------ importing urls ----
const {
  notification,
  questionPaper,
  event,
  syllabus,
  timetable,
  student,
} = require('./../seeds/visitorData');

const {
  GET_NOTIFICATIONS,
  GET_ALL_NOTIFICATIONS,
  GET_ALL_QUESTION_PAPAER,
  GET_EVENTS,
  GET_ALL_EVENTS,
  GET_SYLLABUS,
  GET_TIMETABEL,
  GET_STUDENT,
  SEARCH_STUDENT_BY_NAME,
} = require('./../../utils/urls');

const saveQuestionPaperMinimal = saveMinimal2(questionBank);
const saveNotificationsMinimal = saveMinimal2(Notifications);
const saveEvent = saveMinimal2(Event);
const saveSyllabus = saveMinimal2(Syllabus);
const saveTimetable = saveMinimal2(TimeTable);
const saveStudent = saveMinimal(StudentPrimary);
afterAll(() => {
  app.server.close();
});

describe('-- testing the visitors routes ', () => {
  beforeEach(() => saveNotificationsMinimal(notification));
  beforeEach(() => saveNotificationsMinimal(notification));
  beforeEach(() => saveNotificationsMinimal(notification));
  afterEach(() => Notifications.remove({}));

  beforeEach(() => saveQuestionPaperMinimal(questionPaper));
  afterEach(() => questionBank.remove({}));

  beforeEach(() => saveEvent(event));
  beforeEach(() => saveEvent(event));
  beforeEach(() => saveEvent(event));
  beforeEach(() => saveEvent(event));
  afterEach(() => Event.remove({}));

  beforeEach(() => saveSyllabus(syllabus));
  afterEach(() => Syllabus.remove({}));

  beforeEach(() => saveTimetable(timetable));
  afterEach(() => TimeTable.remove({}));

  beforeEach(() => saveStudent(student));
  afterEach(() => StudentPrimary.remove({}));

  test('get all notification', (done) => {
    request(app)
      .get(GET_ALL_NOTIFICATIONS)
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
      .get(GET_NOTIFICATIONS)
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
      .get(GET_ALL_QUESTION_PAPAER)
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
      .get(GET_ALL_EVENTS)
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
      .get(GET_EVENTS)
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
      .get(GET_SYLLABUS)
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
      .get(GET_TIMETABEL)
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

  test('get student ', (done) => {
    request(app)
      .post(GET_STUDENT)
      .send({ slugg: 'mabel' })
      .expect((res) => {
        expect(res.body.name).toBe(student.name);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });

  test('get student by name', (done) => {
    request(app)
      .post(SEARCH_STUDENT_BY_NAME)
      .send({ name: 'mabel' })
      .expect((res) => {
        expect(res.body[0].name).toBe(student.name);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});
