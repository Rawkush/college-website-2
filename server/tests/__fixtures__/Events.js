const faker = require('faker');

const events = [
  {
    name: faker.name.title(),
    date: new Date(faker.date.past()).toISOString(),
    place: faker.random.locale(),
    type: faker.lorem.word(),
    photos: [
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
    ],
    description: faker.lorem.paragraph(),
  },
  {
    name: faker.name.title(),
    date: new Date(faker.date.past()).toISOString(),
    place: faker.random.locale(),
    type: faker.lorem.word(),
    photos: [
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
    ],
    description: faker.lorem.paragraph(),
  },
  {
    name: faker.name.title(),
    date: new Date(faker.date.past()).toISOString(),
    place: faker.random.locale(),
    type: faker.lorem.word(),
    photos: [
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
    ],
    description: faker.lorem.paragraph(),
  },
  {
    name: faker.name.title(),
    date: new Date(faker.date.past()).toISOString(),
    place: faker.random.locale(),
    type: faker.lorem.word(),
    photos: [
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
    ],
    description: faker.lorem.paragraph(),
  },
  {
    name: faker.name.title(),
    date: new Date(faker.date.past()).toISOString(),
    place: faker.random.locale(),
    type: faker.lorem.word(),
    photos: [
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
      faker.system.fileName(),
    ],
    description: faker.lorem.paragraph(),
  },
];

module.exports = { events };
