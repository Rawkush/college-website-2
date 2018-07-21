const faker = require('faker');

const syllabus = [
  {
    branch: 'it',
    codeNo: '2dedp',
    semester: 4,
    subject: 'english',
    type: 'type',
    l: 123,
    tp: 123,
    credits: 24,
    status: 'pass',
    period: 'fourt',
    file: faker.image.avatar(),
  },
];

module.exports = { syllabus };
