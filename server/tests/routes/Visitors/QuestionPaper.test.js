const request = require('supertest');
const { app } = require('./../../../server');
const { isMongoId } = require('validator');
const { questionBank } = require('./../../../models/questionBank');
const { questionPaper } = require('./../../__fixtures__/QuestionPaper');
const { populateDB } = require('./../../../utils/utils');

const { GET_ALL_QUESTION_PAPER } = require('./../../../utils/urls');

const populateQuestionpaper = populateDB(questionBank);

describe('visitor Routes - question paper', () => {
  afterEach(() => questionBank.remove({}));
  beforeEach(() => populateQuestionpaper(questionPaper));

  test('get all question Paper', () => {
    request(app)
      .get(GET_ALL_QUESTION_PAPER)
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
});
