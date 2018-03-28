// shubham is testig all the even no of functions
/* global describe it:true */
/* eslint no-undef: "error" */
/* eslint no-underscore-dangle: ["error", { "allow": ["__set__"] }] */
/* eslint no-unused-expressions: 0 */
/* exported saveStub */
/* eslint function-paren-newline: 0 */

// Global Imports
const expect = require('expect');

// Generated Imports
const {
  pickTeacher,
  pickTeacherNotifications,
} = require('./../../utils/utils');

// importing the fixtures
const {
  teacherData,
  TeacherNotifications,
} = require('./../__fixtures__/teacherData');

// testing the utils functions
describe('testing the utils functions -', () => {
  describe('pickTeacher --', () => {
    it('should run correctly.', () => {
      const result = pickTeacher(teacherData[1]);
      expect(result).toEqual(teacherData[1].body);
    });
    it('should exclude unnecessary data', () => {
      const result = pickTeacher(teacherData[2]);
      expect(result).toNotEqual(teacherData[2].body);
    });
    it('should not add unnecessary data', () => {
      const result = pickTeacher(teacherData[3]);
      expect(result).toNotEqual(teacherData[3].body);
    });
  });

  // testing the  pick teacher notifiacation
  describe('pickTeacher Notification --', () => {
    it('should pick correctly.', () => {
      const result = pickTeacherNotifications(TeacherNotifications[0]);
      expect(result).toEqual(TeacherNotifications[1]);
    });
    it('should exclude unnecessary data', () => {
      const result = pickTeacherNotifications(TeacherNotifications[2]);
      expect(result).toEqual(TeacherNotifications[1]);
    });
    it('should not add unnecessary data.', () => {
      const result = pickTeacherNotifications(TeacherNotifications[0]);
      expect(result).toEqual(TeacherNotifications[1]);
    });
  });
});
