const { loginLocal } = require('./../../utils/utils');

describe('loginLocal -', () => {
  const email = 'abc@gmail.com';
  const password = '123';
  const user = jest.fn();
  user.generateAuthToken = jest.fn(() => 'token');
  user.toJSON = jest.fn(() => ({ name: 'sample', age: 20 }));
  const Model = jest.fn();
  Model.findByCredentials = jest.fn(() => user);
  const loginLocalMinimal = loginLocal(Model);
  const res = loginLocalMinimal(email, password);
  test('should call the method findByCredential on Model w/ correct args.', () => {
    expect(Model.findByCredentials).toHaveBeenCalledWith(email, password);
  });
  test('should call the generateAuthToken on returned user.', () => {
    expect(user.generateAuthToken).toHaveBeenCalled();
  });
  test('should call the toJSON method on return user.', () => {
    expect(user.toJSON).toHaveBeenCalled();
  });
  test('should return the correct value.', () =>
    res.then((data) => {
      expect(data).toEqual({
        user: { name: 'sample', age: 20 },
        token: 'token',
      });
    }));
});
