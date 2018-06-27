const {
  pickBody,
  pickTeacher,
  pickAccomplishments,
} = require('../../utils/utils');

// Fixtures
const { studentData } = require('../__fixtures__/studentData');
const { accomplishments } = require('../__fixtures__/accomplishments');

const { teacherData } = require('../__fixtures__/teacherData');

// Testing

describe('Utility Functions - ', () => {
  describe('pickBody -', () => {
    test('should run correctly.', () => {
      const result = pickBody(studentData[0]);
      expect(result).toEqual(studentData[0].body);
    });
    test('should exclude unnecessary data.', () => {
      const result = pickBody(studentData[1]);
      expect(result).toEqual(studentData[0].body);
    });
    test('should not add unnecessary data.', () => {
      const result = pickBody(studentData[2]);
      expect(result).toEqual(studentData[2].body);
    });
  });
  describe('pickTeacher -', () => {
    test('should run correctly.', () => {
      const result = pickTeacher(teacherData[0]);
      expect(result).toEqual(teacherData[0].body);
    });
    test('should exclude unnecessary data.', () => {
      const result = pickTeacher(teacherData[1]);
      expect(result).toEqual(teacherData[0].body);
    });
    test('should not add unnecessary data.', () => {
      const result = pickTeacher(teacherData[2]);
      expect(result).toEqual(teacherData[2].body);
    });
  });
  describe('pickAccomplishments - ', () => {
    test('should run correctly.', () => {
      const result = pickAccomplishments(accomplishments[0]);
      expect(result).toEqual(accomplishments[0].body);
    });
    test('should exclude unnecessary data.', () => {
      const result = pickAccomplishments(accomplishments[1]);
      expect(result).toEqual(accomplishments[0].body);
    });
    test('should not add any unnecessary data.', () => {
      const result = pickAccomplishments(accomplishments[2]);
      expect(result).toEqual(accomplishments[2].body);
    });
  });
});
