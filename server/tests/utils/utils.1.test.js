const {
  pickBody,
  pickTeacher,
  // pickAccomplishments,
  // pickProjects,
  // pickEducation,
  // pickSpecialisations,
  // pickWork,
} = require('../../utils/utils');

// Fixtures
const { studentData } = require('../__fixtures__/studentData');
// const { accomplishments } = require('../__fixtures__/accomplishments');
// const { projects } = require('../__fixtures__/projects');
// const { specialisations } = require('../__fixtures__/specialisations');
const {
  teacherData,
  // teacherWork,
  // teacherEducation,
  // technicalSkills,
} = require('../__fixtures__/teacherData');

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
  // describe('pickAccomplishments - ', () => {
  //   test('should run correctly.', () => {
  //     const result = pickAccomplishments(accomplishments[0]);
  //     expect(result).toEqual({
  //       accomplishments: accomplishments[0].body,
  //     });
  //   });
  //   test('should exclude unnecessary data.', () => {
  //     const result = pickAccomplishments(accomplishments[1]);
  //     expect(result).toEqual({
  //       accomplishments: accomplishments[0].body,
  //     });
  //   });
  //   test('should not add any unnecessary data.', () => {
  //     const result = pickAccomplishments(accomplishments[2]);
  //     expect(result).toEqual({
  //       accomplishments: accomplishments[2].body,
  //     });
  //   });
  // });
  // describe('pickProjects - ', () => {
  //   test('should run correctly.', () => {
  //     const result = pickProjects(projects[0]);
  //     expect(result).toEqual({
  //       projects: projects[0].body,
  //     });
  //   });
  //   test('should exclude unnecessary data.', () => {
  //     const result = pickProjects(projects[1]);
  //     expect(result).toEqual({
  //       projects: projects[0].body,
  //     });
  //   });
  //   test('should not add any unnecessary data.', () => {
  //     const result = pickProjects(projects[2]);
  //     expect(result).toEqual({
  //       projects: projects[2].body,
  //     });
  //   });
  // });
  // describe('pickSpecialisations - ', () => {
  //   test('should run correctly.', () => {
  //     const result = pickSpecialisations(specialisations[0]);
  //     expect(result).toEqual({
  //       ...specialisations[0].body,
  //     });
  //   });
  //   test('should exclude unnecessary data.', () => {
  //     const result = pickSpecialisations(specialisations[1]);
  //     expect(result).toEqual({
  //       ...specialisations[0].body,
  //     });
  //   });
  //   test('should not add any unnecessary data.', () => {
  //     const result = pickProjects(projects[2]);
  //     expect(result).toEqual({
  //       projects: projects[2].body,
  //     });
  //   });
  // });
  // describe('pickWork - ', () => {
  //   test('should run correctly.', () => {
  //     const result = pickWork(teacherWork[0]);
  //     expect(result).toEqual({
  //       work: { ...teacherWork[0].body },
  //     });
  //   });
  //   test('should exclude unnecessary data.', () => {
  //     const result = pickWork(teacherWork[1]);
  //     expect(result).toEqual({
  //       work: { ...teacherWork[0].body },
  //     });
  //   });
  //   test('should not add any unnecessary data.', () => {
  //     const result = pickWork(teacherWork[2]);
  //     expect(result).toEqual({
  //       work: { ...teacherWork[2].body },
  //     });
  //   });
  // });
  // describe('pickEducation - ', () => {
  //   test('should run correctly.', () => {
  //     const result = pickEducation(teacherEducation[0]);
  //     expect(result).toEqual({
  //       ...teacherEducation[0].body,
  //     });
  //   });
  //   test('should exclude unnecessary data.', () => {
  //     const result = pickEducation(teacherEducation[1]);
  //     expect(result).toEqual({
  //       ...teacherEducation[0].body,
  //     });
  //   });
  // });
  // describe('pickTechnicalSkills - ', () => {
  //   test('should run correctly.', () => {
  //     const result = pickTechnicalSkills(technicalSkills[0]);
  //     expect(result).toEqual({
  //       ...technicalSkills[0].body,
  //     });
  //   });
  //   test('should exclude unnecessary data.', () => {
  //     const result = pickTechnicalSkills(technicalSkills[1]);
  //     expect(result).toEqual({
  //       ...technicalSkills[0].body,
  //     });
  //   });
  // });
});
