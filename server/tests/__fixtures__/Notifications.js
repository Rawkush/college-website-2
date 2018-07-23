const { lorem, image, internet } = require('faker');

const notification = [
  {
    title: 'Voluptatum',
    description: 'Ut id consequuntur dolor quo aut corrupti.',
    file: 'https://melyna.com',
    tags: ['student', 'iyear', 'iiyear', 'teacher', 'pdf'],
    link: 'http://rasheed.name',
  },
  {
    title: 'Cletus',
    description:
      'Quisquam explicabo sit sunt debitis molestias inventore deleniti exercitationem vitae. Ut quam rerum ab quod illum ipsum soluta.',
    file: 'https://candelario.org',
    tags: ['pdf', 'teacher'],
    link: 'http://noe.net',
  },
  {
    title: lorem.sentence(),
    description: lorem.paragraph(),
    file: image.image(),
    tags: ['pdf', 'teacher'],
    link: internet.url(),
  },
  {
    title: lorem.sentence(),
    description: lorem.paragraph(),
    file: image.image(),
    tags: ['pdf', 'teacher'],
    link: internet.url(),
  },
  {
    title: lorem.sentence(),
    description: lorem.paragraph(),
    file: image.image(),
    tags: ['pdf', 'teacher'],
    link: internet.url(),
  },
];

module.exports = { notification };
