const faker = require('faker');

const questionPaper = [
  {
    subject: 'english   ',
    year: new Date(faker.date.past()).toISOString(),
    branch: 'civil',
    semester: '4th',
    // file: String,
  },
];

module.exports = { questionPaper };
