/* global describe it:true */
/* eslint no-undef: "error" */
/* eslint no-underscore-dangle: ["error", { "allow": ["__set__"] }] */
/* eslint no-unused-expressions: 0 */
/* exported saveStub */
/* eslint function-paren-newline: ["error", "never"] */

// Global Imports
const { expect } = require('chai');
const sinon = require('sinon');

// Generated Imports
const {
  pickBody,
  pickAccomplishments,
  pickProjects,
  pickSpecialisations,
  saveMinimal,
  updateMinimal,
} = require('../../utils/utils');

// Fixtures
const { studentData } = require('../__fixtures__/studentData');
const { accomplishments } = require('../__fixtures__/accomplishments');
const { projects } = require('../__fixtures__/projects');
const { specialisations } = require('../__fixtures__/specialisations');

// Testing

describe('Utility Functions - ', () => {
  describe('pickBody -', () => {
    it('should run correctly.', () => {
      const result = pickBody(studentData[0]);
      expect(result).to.deep.equal(studentData[0].body);
    });
    it('should exclude unnecessary data.', () => {
      const result = pickBody(studentData[1]);
      expect(result).to.deep.equal(studentData[0].body);
    });
    it('should not add unnecessary data.', () => {
      const result = pickBody(studentData[2]);
      expect(result).to.deep.equal(studentData[2].body);
    });
  });
  describe('pickAccomplishments - ', () => {
    it('should run correctly.', () => {
      const result = pickAccomplishments(accomplishments[0]);
      expect(result).to.deep.equal({
        accomplishments: accomplishments[0].body,
      });
    });
    it('should exclude unnecessary data.', () => {
      const result = pickAccomplishments(accomplishments[1]);
      expect(result).to.deep.equal({
        accomplishments: accomplishments[0].body,
      });
    });
    it('should not add any unnecessary data.', () => {
      const result = pickAccomplishments(accomplishments[2]);
      expect(result).to.deep.equal({
        accomplishments: accomplishments[2].body,
      });
    });
  });
  describe(' pickProjects - ', () => {
    it('should run correctly.', () => {
      const result = pickProjects(projects[0]);
      expect(result).to.deep.equal({
        projects: projects[0].body,
      });
    });
    it('should exclude unnecessary data.', () => {
      const result = pickProjects(projects[1]);
      expect(result).to.deep.equal({
        projects: projects[0].body,
      });
    });
    it('should not add any unnecessary data.', () => {
      const result = pickProjects(projects[2]);
      expect(result).to.deep.equal({
        projects: projects[2].body,
      });
    });
  });
  describe(' pickSpecialisations - ', () => {
    it('should run correctly.', () => {
      const result = pickSpecialisations(specialisations[0]);
      expect(result).to.deep.equal({
        ...specialisations[0].body,
      });
    });
    it('should exclude unnecessary data.', () => {
      const result = pickSpecialisations(specialisations[1]);
      expect(result).to.deep.equal({
        ...specialisations[0].body,
      });
    });
    it('should not add any unnecessary data.', () => {
      const result = pickProjects(projects[2]);
      expect(result).to.deep.equal({
        projects: projects[2].body,
      });
    });
  });
  describe('saveMinimal -', () => {
    const body = { name: 'sample', age: 20 };
    const Model = sinon.stub();
    Model.prototype.save = sinon.stub().returns(body);
    Model.prototype.generateAuthToken = sinon.stub().returns('token');
    const saveUserMinimal = saveMinimal(Model);
    const res = saveUserMinimal(body);
    it('should call the Model with new keyword.', () => {
      expect(Model.calledWithNew()).to.be.true;
    });
    it('should call the Model w/ correct args.', () => {
      expect(Model.calledWithExactly(body)).to.be.true;
    });
    it('should call the save Method on the Model.', () => {
      expect(Model.prototype.save.called).to.be.true;
    });
    it('should call the generateAuthToken Method on the Model.', () => {
      expect(Model.prototype.generateAuthToken.called).to.be.true;
    });
    it('should return the correct value.', (done) => {
      res.then((data) => {
        expect(data).to.equal({ user: body, token: 'token' });
        done();
      });
    });
  });
  describe('updateMinimal -', () => {
    const Model = sinon.stub();
    Model.findOneAndUpdate = sinon.stub().returns('data');
    const runValidators = true;
    const upsert = true;
    const condition = { _id: 123 };
    const updateModelMinimal = updateMinimal(Model, runValidators, upsert);
    const body = { name: 'Aman' };
    const res = updateModelMinimal(condition, body);
    it('should call the findOndAndUpdate method on Model.', () => {
      expect(Model.findOneAndUpdate.called).to.be.true;
    });
    it('should call the findOneAndUpdate method w/ correct args.', () => {
      expect( // eslint-disable-line
        Model.findOneAndUpdate.calledWithExactly(condition, body, {
          new: true,
          runValidators,
          upsert,
        })
      ).to.be.true; // eslint-disable-line
    });
    it('should return the correct data.', (done) => {
      res.then((data) => {
        expect(data).to.equal('data');
        done();
      });
    });
  });
});
