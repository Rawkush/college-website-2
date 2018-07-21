const faker = require('faker');

const timetable = [
  {
    branch: 'civil  ',
    semester: 'third',
    wef: new Date(faker.date.past()).toISOString(),
    title: faker.lorem.words(),
    // file: {
    //   type: faker.image.avatar(),
    // },
  },
];

module.exports = { timetable };
