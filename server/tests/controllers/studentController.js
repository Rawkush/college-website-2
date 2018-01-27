// Importing global modules
const { expect } = require('chai');
const { stub } = require('sinon');
const rewire = require('rewire');
const { createRequest, createResponse } = require('node-mocks-http');

// Importing generated functions
const studentsController = rewire('./../../controllers/studentsController');

const req = createRequest();
const res = createResponse();

describe('Student Controllers -', () => {
  describe('studentRegistration', () => {
    const saveStudentMinimal = stub().returns();
    studentsController.__set__('saveStudentMinimal', saveStudentMinimal);
    studentsController.studentRegistration(req, res);
    it('should call the saveStudentMinimal.', () => {
      expect(saveStudentMinimal.called).to.be.true;
    });
  });
});
