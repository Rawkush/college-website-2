const request = require('supertest');
const { app } = require('./../../../server');
const { isMongoId } = require('validator');
const { Syllabus } = require('./../../../models/syllabus');
const { syllabus } = require('./../../__fixtures__/Syllabus');
const { populateDB } = require('./../../../utils/utils');

const { GET_SYLLABUS } = require('./../../../utils/urls');

const populateSyllabus = populateDB(Syllabus);
describe('visitor Routes - Syllabus', () => {
  afterEach(() => Syllabus.remove({}));
  beforeEach(() => populateSyllabus(syllabus));

  test('get all syllabus', () => {
    request(app)
      .get(GET_SYLLABUS)
      .then(({ body }) => {
        expect(body).toHaveLength(1);
        expect(body[0]).toMatchObject(syllabus[0]);
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
  //     .get(GET_SYLLABUS)
  //     .then(({ body: [{ _id }] }) => expect(isMongoId(_id)).toBeTruthy()));
});
