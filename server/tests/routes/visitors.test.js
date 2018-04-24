const request = require('supertest');
const { app } = require('./../../server');

//  Importing Models
const { Notifications } = require('./../../models/notification');
const { saveMinimal2 } = require('./../../utils/utils');

const notification = {
  title: 'Voluptatum modi facere voluptatibus non ducimus veritatis.',
  description:
    'Neque deserunt ut libero eaque quia. Eos rerum magni. In consequuntur doloremque sunt similique.',
  file: 'http://lorempixel.com/640/480',
  tags: ['tag1', 'tag2', 'tag3'],
  link: 'https://herta.name',
};

const saveNotificationsMinimal = saveMinimal2(Notifications);

beforeEach(() => saveNotificationsMinimal(notification));

afterEach(() => Notifications.remove({}));

afterAll(() => {
  app.server.close();
});

describe('Visitors Routes', () => {
  test('should be a sample test', (done) => {
    request(app)
      .get('/s/visitor/getallnotifications')
      .expect((res) => {
        expect(res.body).toHaveLength(1);
        expect(res.body).toHaveLength(1);
      })
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });
});
