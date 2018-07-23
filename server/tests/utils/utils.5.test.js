const {
  pickProjects,
  pickEducation,
  pickSpecialisations,
  pickWork,
  pickTechnicalSkills,
} = require('../../utils/utils');

//  Fixtures
const { projects } = require('../__fixtures__/projects');
const { specialisations } = require('../__fixtures__/specialisations');
const {
  teacherWork,
  teacherEducation,
  technicalSkills,
} = require('../__fixtures__/teacherData');

//  Tests
describe('pickProjects - ', () => {
  test('should run correctly.', () => {
    const result = pickProjects(projects[0]);
    expect(result).toEqual(projects[0].body);
  });
  test('should exclude unnecessary data.', () => {
    const result = pickProjects(projects[1]);
    expect(result).toEqual(projects[0].body);
  });
  test('should not add any unnecessary data.', () => {
    const result = pickProjects(projects[2]);
    expect(result).toEqual(projects[2].body);
  });
});
describe('pickSpecialisations - ', () => {
  test('should run correctly.', () => {
    const result = pickSpecialisations(specialisations[0]);
    expect(result).toEqual({
      ...specialisations[0].body,
    });
  });
  test('should exclude unnecessary data.', () => {
    const result = pickSpecialisations(specialisations[1]);
    expect(result).toEqual({
      ...specialisations[0].body,
    });
  });
});
describe('pickWork - ', () => {
  test('should run correctly.', () => {
    const result = pickWork(teacherWork[0]);
    expect(result).toEqual({
      work: { ...teacherWork[0].body },
    });
  });
  test('should exclude unnecessary data.', () => {
    const result = pickWork(teacherWork[1]);
    expect(result).toEqual({
      work: { ...teacherWork[0].body },
    });
  });
  test('should not add any unnecessary data.', () => {
    const result = pickWork(teacherWork[2]);
    expect(result).toEqual({
      work: { ...teacherWork[2].body },
    });
  });
});
describe('pickEducation - ', () => {
  test('should run correctly.', () => {
    const result = pickEducation(teacherEducation[0]);
    expect(result).toEqual({
      ...teacherEducation[0].body,
    });
  });
  test('should exclude unnecessary data.', () => {
    const result = pickEducation(teacherEducation[1]);
    expect(result).toEqual({
      ...teacherEducation[0].body,
    });
  });
});
describe('pickTechnicalSkills - ', () => {
  test('should run correctly.', () => {
    const result = pickTechnicalSkills(technicalSkills[0]);
    expect(result).toEqual({
      ...technicalSkills[0].body,
    });
  });
  test('should exclude unnecessary data.', () => {
    const result = pickTechnicalSkills(technicalSkills[1]);
    expect(result).toEqual({
      ...technicalSkills[0].body,
    });
  });
});
