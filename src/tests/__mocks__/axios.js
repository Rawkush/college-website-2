const sinon = require.requireActual('sinon');

export default sinon.stub().returns(
  Promise.resolve({
    data: [
      {
        name: 'Aman',
        email: 'abc@test.com',
        _id: 'klsjdfkjklf',
      },
      {
        name: 'Maegan',
        email: 'abc@test.com',
        _id: 'jflkdsjalkf',
      },
      {
        name: 'Tara',
        email: 'abc@test.com',
        _id: 'fjdskjalkfjjfsal',
      },
      {
        name: 'Belle',
        email: 'abc@test.com',
        _id: 'fsadfjkjdsaf',
      },
    ],
  })
);
