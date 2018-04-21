// Global Imports
const sinon = require('sinon');

// Generated Imports
const {
  pickBody,
  pickTeacher,
  pickAccomplishments,
  pickProjects,
  pickEducation,
  pickSpecialisations,
  pickWork,
  saveMinimal,
  saveMinimal2,
  updateMinimal,
  pickTechnicalSkills,
  generateAuthToken,
  decodeAuthTokenMinimal,
  deleteMinimal,
  checkUserMinimal,
  removeTokenMinimal,
  deleteSecondaryMinimal,
  loginLocal,
} = require('../../utils/utils');

// Fixtures
const { studentData } = require('../__fixtures__/studentData');
const { accomplishments } = require('../__fixtures__/accomplishments');
const { projects } = require('../__fixtures__/projects');
const { specialisations } = require('../__fixtures__/specialisations');
const {
  teacherData,
  teacherWork,
  teacherEducation,
  technicalSkills,
} = require('../__fixtures__/teacherData');

// Testing

describe('Utility Functions - ', () => {
  describe('pickBody -', () => {
    test('should run correctly.', () => {
      const result = pickBody(studentData[0]);
      expect(result).to.deep.equal(studentData[0].body.userData);
    });
    test('should exclude unnecessary data.', () => {
      const result = pickBody(studentData[1]);
      expect(result).to.deep.equal(studentData[0].body.userData);
    });
    test('should not add unnecessary data.', () => {
      const result = pickBody(studentData[2]);
      expect(result).toDeepEqual(studentData[2].body.userData);
    });
  });
  describe('pickTeacher -', () => {
    test('should run correctly.', () => {
      const result = pickTeacher(teacherData[0]);
      expect(result).to.deep.equal(teacherData[0].body);
    });
    test('should exclude unnecessary data.', () => {
      const result = pickTeacher(teacherData[1]);
      expect(result).to.deep.equal(teacherData[0].body);
    });
    test('should not add unnecessary data.', () => {
      const result = pickTeacher(teacherData[2]);
      expect(result).to.deep.equal(teacherData[2].body);
    });
  });
  describe('pickAccomplishments - ', () => {
    test('should run correctly.', () => {
      const result = pickAccomplishments(accomplishments[0]);
      expect(result).to.deep.equal({
        accomplishments: accomplishments[0].body,
      });
    });
    test('should exclude unnecessary data.', () => {
      const result = pickAccomplishments(accomplishments[1]);
      expect(result).to.deep.equal({
        accomplishments: accomplishments[0].body,
      });
    });
    test('should not add any unnecessary data.', () => {
      const result = pickAccomplishments(accomplishments[2]);
      expect(result).to.deep.equal({
        accomplishments: accomplishments[2].body,
      });
    });
  });
  describe('pickProjects - ', () => {
    test('should run correctly.', () => {
      const result = pickProjects(projects[0]);
      expect(result).to.deep.equal({
        projects: projects[0].body,
      });
    });
    test('should exclude unnecessary data.', () => {
      const result = pickProjects(projects[1]);
      expect(result).to.deep.equal({
        projects: projects[0].body,
      });
    });
    test('should not add any unnecessary data.', () => {
      const result = pickProjects(projects[2]);
      expect(result).to.deep.equal({
        projects: projects[2].body,
      });
    });
  });
  describe('pickSpecialisations - ', () => {
    test('should run correctly.', () => {
      const result = pickSpecialisations(specialisations[0]);
      expect(result).to.deep.equal({
        ...specialisations[0].body,
      });
    });
    test('should exclude unnecessary data.', () => {
      const result = pickSpecialisations(specialisations[1]);
      expect(result).to.deep.equal({
        ...specialisations[0].body,
      });
    });
    test('should not add any unnecessary data.', () => {
      const result = pickProjects(projects[2]);
      expect(result).to.deep.equal({
        projects: projects[2].body,
      });
    });
  });
  describe('pickWork - ', () => {
    test('should run correctly.', () => {
      const result = pickWork(teacherWork[0]);
      expect(result).to.deep.equal({
        work: { ...teacherWork[0].body },
      });
    });
    test('should exclude unnecessary data.', () => {
      const result = pickWork(teacherWork[1]);
      expect(result).to.deep.equal({
        work: { ...teacherWork[0].body },
      });
    });
    test('should not add any unnecessary data.', () => {
      const result = pickWork(teacherWork[2]);
      expect(result).to.deep.equal({
        work: { ...teacherWork[2].body },
      });
    });
  });
  describe('pickEducation - ', () => {
    test('should run correctly.', () => {
      const result = pickEducation(teacherEducation[0]);
      expect(result).to.deep.equal({
        ...teacherEducation[0].body,
      });
    });
    test('should exclude unnecessary data.', () => {
      const result = pickEducation(teacherEducation[1]);
      expect(result).to.deep.equal({
        ...teacherEducation[0].body,
      });
    });
  });
  describe('pickTechnicalSkills - ', () => {
    test('should run correctly.', () => {
      const result = pickTechnicalSkills(technicalSkills[0]);
      expect(result).to.deep.equal({
        ...technicalSkills[0].body,
      });
    });
    test('should exclude unnecessary data.', () => {
      const result = pickTechnicalSkills(technicalSkills[1]);
      expect(result).to.deep.equal({
        ...technicalSkills[0].body,
      });
    });
  });
  describe('saveMinimal -', () => {
    const body = { name: 'sample', age: 20 };
    const decoded = { _id: 'jkhasjfhd', provider: 'Google' };
    const Model = sinon.stub();
    Model.prototype.save = sinon.stub().returns(body);
    Model.decodedProviderAndId = sinon.stub().returns(decoded);
    Model.prototype.generateAuthToken = sinon.stub().returns('token');
    const saveUserMinimal = saveMinimal(Model);
    const res = saveUserMinimal(body);
    test('should call the Model with new keyword.', () => {
      expect(Model.calledWithNew()).to.be.true;
    });
    test('should call the Model w/ correct args.', () => {
      expect(Model.calledWithExactly(body)).to.be.true;
    });
    test('should call the save Method on the Model.', () => {
      expect(Model.prototype.save.called).to.be.true;
    });
    test('should call the generateAuthToken Method on the Model.', () => {
      expect(Model.prototype.generateAuthToken.called).to.be.true;
    });
    test('should return the correct value.', (done) => {
      res.then((data) => {
        expect(data).to.deep.equal({ user: body, token: 'token' });
        done();
      });
    });
  });
  describe('saveMinimal2 -', () => {
    const body = { name: 'sample', age: 20 };
    const Model = sinon.stub();
    Model.prototype.save = sinon.stub().returns(body);
    const saveUserMinimal2 = saveMinimal2(Model);
    const res = saveUserMinimal2(body);
    test('should call the Model with new keyword.', () => {
      expect(Model.calledWithNew()).to.be.true;
    });
    test('should call the Model w/ correct args.', () => {
      expect(Model.calledWithExactly(body)).to.be.true;
    });
    test('should call the save Method on the Model.', () => {
      expect(Model.prototype.save.called).to.be.true;
    });
    test('should return the correct value.', (done) => {
      res.then((data) => {
        expect(data).to.deep.equal(body);
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
    test('should call the findOndAndUpdate method on Model.', () => {
      expect(Model.findOneAndUpdate.called).to.be.true;
    });
    test('should call the findOneAndUpdate method w/ correct args.', () => {
      expect(
        Model.findOneAndUpdate.calledWithExactly(condition, body, {
          new: true,
          runValidators,
          upsert,
        })
      ).to.be.true; // eslint-disable-line
    });
    test('should return the correct data.', (done) => {
      res.then((data) => {
        expect(data).to.equal('data');
        done();
      });
    });
  });
  describe('generateAuthToken -', () => {
    const user = sinon.stub();
    user.generateAuthToken = sinon.stub().returns('token');
    const res = generateAuthToken(user);
    test('should call the generateAuthToken method on User.', () => {
      expect(user.generateAuthToken.called).to.be.true;
    });
    test('should return the correct data.', (done) => {
      res.then((data) => {
        expect(data).to.equal('token');
        done();
      });
    });
  });
  describe('generateAuthToken -', () => {
    const user = sinon.stub();
    user.generateAuthToken = sinon.stub().returns('token');
    const res = generateAuthToken(user);
    test('should call the generateAuthToken method on User.', () => {
      expect(user.generateAuthToken.called).to.be.true;
    });
    test('should return the correct data.', (done) => {
      res.then((data) => {
        expect(data).to.equal('token');
        done();
      });
    });
  });
  describe('decodeAuthTokenMinimal -', () => {
    const Model = sinon.stub();
    Model.decodeProviderAndId = sinon.stub().returns('token');
    const decodeAuthToken = decodeAuthTokenMinimal(Model);
    const res = decodeAuthToken('abcd');
    test('should call the generateAuthToken method on User.', () => {
      expect(Model.decodeProviderAndId.called).to.be.true;
    });
    test('should return the correct data.', (done) => {
      res.then((data) => {
        expect(data).to.equal('token');
        done();
      });
    });
    test('should call the decodeProviderAndId w/ correct args.', () => {
      expect(Model.decodeProviderAndId.calledWithExactly('abcd')).to.be.true;
    });
  });
  describe('deleteMinimal -', () => {
    const Model = sinon.stub();
    const body = { name: 'sample', age: 20 };
    Model.findByIdAndRemove = sinon.stub().returns(body);
    const id = 'kjdsjfdsahf';
    const deleteUser = deleteMinimal(Model);
    const res = deleteUser(id);
    test('should call the findOneAndRemove method on User.', () => {
      expect(Model.findByIdAndRemove.called).to.be.true;
    });
    test('should call the findByIdAndRemove w/ correct args.', () => {
      expect(Model.findByIdAndRemove.calledWithExactly(id)).to.be.true;
    });
    test('should return the correct data.', (done) => {
      res.then((data) => {
        expect(data).to.equal(body);
        done();
      });
    });
  });
  describe('checkUserMinimal -', () => {
    const Model = sinon.stub();
    const body = { name: 'sample', age: 20 };
    Model.findByProviderAndId = sinon.stub().returns(body);
    const token = 'kjdsjfdsahf';
    const checkUser = checkUserMinimal(Model);
    const res = checkUser(token);
    test('should call the findByProviderAndId method on User.', () => {
      expect(Model.findByProviderAndId.called).to.be.true;
    });
    test('should call the findByProviderAndId w/ correct args.', () => {
      expect(Model.findByProviderAndId.calledWithExactly(token)).to.be.true;
    });
    test('should return the correct data.', (done) => {
      res.then((data) => {
        expect(data).to.equal(body);
        done();
      });
    });
  });
  describe('removeTokenMinimal -', () => {
    const user = sinon.stub();
    const body = { name: 'sample', age: 20 };
    const token = 'jkfaskjdhfj';
    user.removeToken = sinon.stub().returns(body);
    removeTokenMinimal(user, token);
    test('should call the removeToken method on User.', () => {
      expect(user.removeToken.called).to.be.true;
    });
    test('should call the removeToken w/ correct args.', () => {
      expect(user.removeToken.calledWithExactly(token)).to.be.true;
    });
  });
  describe('deleteSecondaryMinimal -', () => {
    const Model = sinon.stub();
    Model.findOneAndRemove = sinon.stub();
    const _id = 'akjfsdkf'; // eslint-disable-line
    const body = { _creator: _id };
    const deleteSecondary = deleteSecondaryMinimal(Model);
    deleteSecondary(_id);
    test('should call the findOneAndRemove method on User.', () => {
      expect(Model.findOneAndRemove.called).to.be.true;
    });
    test('should call the removeToken w/ correct args.', () => {
      expect(Model.findOneAndRemove.calledWithExactly(body)).to.be.true;
    });
  });
  describe('loginLocal -', () => {
    const email = 'abc@gmail.com';
    const password = '123';
    const user = sinon.stub();
    user.generateAuthToken = sinon.stub().returns('token');
    user.toJSON = sinon.stub().returns({ name: 'sample', age: 20 });
    const Model = sinon.stub();
    Model.findByCredentials = sinon.stub().returns(user);
    const loginLocalMinimal = loginLocal(Model);
    const res = loginLocalMinimal(email, password);
    test('should call the method findByCredential on Model w/ correct args.', () => {
      expect(Model.findByCredentials.calledWithExactly(email, password)).to.be
        .true;
    });
    test('should call the generateAuthToken on returned user.', () => {
      expect(user.generateAuthToken.called).to.be.true;
    });
    test('should call the toJSON method on return user.', () => {
      expect(user.toJSON.called).to.be.true;
    });
    test('should return the correct value.', (done) => {
      res.then((data) => {
        expect(data).to.deep.equal({
          user: { name: 'sample', age: 20 },
          token: 'token',
        });
        done();
      });
    });
  });
});
