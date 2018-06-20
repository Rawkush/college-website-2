const {
  // pickTechnicalSkills,
  decodeAuthTokenMinimal,
  deleteMinimal,
  checkUserMinimal,
  removeTokenMinimal,
  deleteSecondaryMinimal,
} = require('./../../utils/utils');

describe('decodeAuthTokenMinimal -', () => {
  const Model = jest.fn();
  Model.decodeProviderAndId = jest.fn(() => 'token');
  const decodeAuthToken = decodeAuthTokenMinimal(Model);
  const res = decodeAuthToken('abcd');
  test('should call the generateAuthToken method on User.', () => {
    expect(Model.decodeProviderAndId).toHaveBeenCalled();
  });
  test('should return the correct data.', () =>
    res.then((data) => {
      expect(data).toEqual('token');
    }));
  test('should call the decodeProviderAndId w/ correct args.', () => {
    expect(Model.decodeProviderAndId).toHaveBeenCalledWith('abcd');
  });
});
describe('deleteMinimal -', () => {
  const Model = jest.fn();
  const body = { name: 'sample', age: 20 };
  Model.findByIdAndRemove = jest.fn(() => body);
  const id = 'abce';
  const deleteUser = deleteMinimal(Model);
  const res = deleteUser(id);
  test('should call the findOneAndRemove method on User.', () => {
    expect(Model.findByIdAndRemove).toHaveBeenCalled();
  });
  test('should call the findByIdAndRemove w/ correct args.', () => {
    expect(Model.findByIdAndRemove).toHaveBeenCalledWith(id);
  });
  test('should return the correct data.', () =>
    res.then((data) => {
      expect(data).toEqual(body);
    }));
});
describe('checkUserMinimal -', () => {
  const Model = jest.fn();
  const body = { name: 'sample', age: 20 };
  Model.findByProviderAndId = jest.fn(() => body);
  const token = 'abcd';
  const checkUser = checkUserMinimal(Model);
  const res = checkUser(token);
  test('should call the findByProviderAndId method on User.', () => {
    expect(Model.findByProviderAndId).toHaveBeenCalled();
  });
  test('should call the findByProviderAndId w/ correct args.', () => {
    expect(Model.findByProviderAndId).toHaveBeenCalledWith(token);
  });
  test('should return the correct data.', (done) =>
    res.then((data) => {
      expect(data).toEqual(body);
      done();
    }));
});
describe('removeTokenMinimal -', () => {
  const user = jest.fn();
  const body = { name: 'sample', age: 20 };
  const token = '1223';
  user.removeToken = jest.fn(() => body);
  removeTokenMinimal(user, token);
  test('should call the removeToken method on User.', () => {
    expect(user.removeToken).toHaveBeenCalled();
  });
  test('should call the removeToken w/ correct args.', () => {
    expect(user.removeToken).toHaveBeenCalledWith(token);
  });
});
describe('deleteSecondaryMinimal -', () => {
  const Model = jest.fn();
  Model.findOneAndRemove = jest.fn();
  const _id = '1234'; // eslint-disable-line
  const body = { _creator: _id };
  const deleteSecondary = deleteSecondaryMinimal(Model);
  deleteSecondary(_id);
  test('should call the findOneAndRemove method on User.', () => {
    expect(Model.findOneAndRemove).toHaveBeenCalled();
  });
  test('should call the removeToken w/ correct args.', () => {
    expect(Model.findOneAndRemove).toHaveBeenCalledWith(body);
  });
});
