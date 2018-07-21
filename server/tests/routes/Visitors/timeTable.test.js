const request = require('supertest');
const { app } = require('./../../../server');
const { isMongoId } = require('validator');
const { TimeTable } = require('./../../../models/timeTable');
const { timetable } = require('./../../__fixtures__/Timetable');
const { populateDB } = require('./../../../utils/utils');

const { GET_TIMETABLE } = require('./../../../utils/urls');

const populateTimetable = populateDB(TimeTable);

describe('visitor Routes - timetable', () => {
  afterEach(() => TimeTable.remove({}));
  beforeEach(() => populateTimetable(timetable));

  test('get all timetable', () => {
    request(app)
      .get(GET_TIMETABLE)
      .then(({ body }) => {
        expect(body).toHaveLength(1);
        expect(body[0]).toMatchObject(timetable[0]);
        expect(body[0]).toHaveProperty('createdAt');
        expect(body[0]).toHaveProperty('updatedAt');
        expect(body[0]).toHaveProperty('_id');
        expect(body[0]).toHaveProperty('__v');
      })
      .catch((err) => {
        console.log(err);
      });
  });
  // test('return a valid mongodb _id.', () =>
  //   request(app)
  //     .get(GET_TIMETABLE)
  //     .then(({ body: [{ _id }] }) => expect(isMongoId(_id)).toBeTruthy()));
});
