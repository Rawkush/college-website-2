const request = require('supertest');
const { isMongoId } = require('validator');
const { app } = require('./../../../server');
const { Event } = require('./../../../models/events');
const { events } = require('./../../__fixtures__/Events');
const { populateDB } = require('./../../../utils/utils');
const { GET_EVENTS, GET_ALL_EVENTS } = require('./../../../utils/urls');

const populateEvents = populateDB(Event);

describe('Visitor Routes - Events', () => {
  afterEach(() => Event.remove({}));
  describe(GET_ALL_EVENTS, () => {
    describe('Test on single event.', () => {
      beforeEach(() => populateEvents([events[0]]));
      test('match the object.', () =>
        request(app)
          .get(GET_ALL_EVENTS)
          .then(({ body }) => {
            expect(body).toHaveLength(1);
            expect(body[0]).toMatchObject(events[0]);
            expect(body[0].photos).toEqual(events[0].photos);
          }));
      test('contains essential properties.', () =>
        request(app)
          .get(GET_ALL_EVENTS)
          .then(({ body }) => {
            expect(body[0]).toHaveProperty('createdAt');
            expect(body[0]).toHaveProperty('updatedAt');
            expect(body[0]).toHaveProperty('_id');
            expect(body[0]).toHaveProperty('__v');
          }));
      test('return a valid mongodb _id.', () =>
        request(app)
          .get(GET_ALL_EVENTS)
          .then(({ body: [{ _id }] }) => expect(isMongoId(_id)).toBeTruthy()));
    });
    describe('Test on more than three events.', () => {
      beforeEach(() => populateEvents(events));
      test('return 5 events.', () =>
        request(app)
          .get(GET_ALL_EVENTS)
          .then(({ body }) => {
            expect(body).toHaveLength(5);
          }));
    });
  });
  describe(GET_EVENTS, () => {
    describe('Test on 3 events.', () => {
      beforeEach(() => populateEvents(events));
      test('return 3 events.', () =>
        request(app)
          .get(GET_EVENTS)
          .then(({ body }) => {
            expect(body).toHaveLength(3);
          }));
    });
  });
});
