/* global describe it:true */
/* eslint no-undef: "error" */
/* eslint no-underscore-dangle: ["error", { "allow": ["__set__"] }] */
/* eslint no-unused-expressions: 0 */
/* exported saveStub */
/* eslint function-paren-newline: 0 */

// Importing global modules
const { expect } = require('chai');
const { stub } = require('sinon');
const { createRequest, createResponse } = require('node-mocks-http');

// Importing generated functions
const studentsController = require('./../../controllers/studentsController');

const req = createRequest();
const res = createResponse();

describe('Student Controllers -', () => {
  const decodeStudentAuthToken = stub(
    studentsController,
    'decodeStudentAuthToken'
  );
  it('should call the decodeStudentAuthToken function', () => {
    studentsController.studentRegistration(req, res);
    expect(decodeStudentAuthToken.called).to.be.true;
  });
});
