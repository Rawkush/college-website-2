const {
  saveMinimal,
  saveMinimal2,
  updateMinimal,
  generateAuthToken,
  // pickTechnicalSkills,
  // decodeAuthTokenMinimal,
  // deleteMinimal,
  // checkUserMinimal,
  // removeTokenMinimal,
  // deleteSecondaryMinimal,
  // loginLocal,
} = require('../../utils/utils');

describe('saveMinimal -', () => {
  const body = { name: 'sample', age: 20 };
  const decoded = { _id: '112233', provider: 'Google' };
  const Model = jest.fn();
  Model.prototype.save = jest.fn(() => body);
  Model.decodedProviderAndId = jest.fn(() => decoded);
  Model.prototype.generateAuthToken = jest.fn(() => 'token');
  const saveUserMinimal = saveMinimal(Model);
  const result = saveUserMinimal(body);
  test('should call the Model with new keyword.', () => {
    expect(Model).toHaveBeenCalled();
  });
  test('should call the Model w/ correct args.', () => {
    expect(Model).toHaveBeenCalledWith(body);
  });
  test('should call the save Method on the Model.', () => {
    expect(Model.prototype.save).toHaveBeenCalled();
  });
  test('should call the generateAuthToken Method on the Model.', () => {
    expect(Model.prototype.generateAuthToken).toHaveBeenCalled();
  });
  test('should return the correct value.', () =>
    result.then((data) => {
      expect(data).toEqual({ user: body, token: 'token' });
    }));
});
describe('saveMinimal2 -', () => {
  const body = { name: 'sample', age: 20 };
  const Model = jest.fn();
  Model.prototype.save = jest.fn(() => body);
  const saveUserMinimal2 = saveMinimal2(Model);
  const result = saveUserMinimal2(body);
  test('should call the Model with new keyword.', () => {
    expect(Model).toHaveBeenCalled();
  });
  test('should call the Model w/ correct args.', () => {
    expect(Model).toHaveBeenCalledWith(body);
  });
  test('should call the save Method on the Model.', () => {
    expect(Model.prototype.save).toHaveBeenCalled();
  });
  test('should return the correct value.', () =>
    result.then((data) => {
      expect(data).toEqual(body);
    }));
});
describe('updateMinimal -', () => {
  const Model = jest.fn();
  Model.findOneAndUpdate = jest.fn(() => 'data');
  const runValidators = true;
  const upsert = true;
  const condition = { _id: 123 };
  const updateModelMinimal = updateMinimal(Model, runValidators, upsert);
  const body = { name: 'Aman' };
  const res = updateModelMinimal(condition, body);
  test('should call the findOndAndUpdate method on Model.', () => {
    expect(Model.findOneAndUpdate).toHaveBeenCalled();
  });
  test('should call the findOneAndUpdate method w/ correct args.', () => {
    expect(Model.findOneAndUpdate).toHaveBeenCalledWith(condition, body, {
      new: true,
      runValidators,
      upsert,
    });
  });
  test('should return the correct data.', () =>
    res.then((data) => {
      expect(data).toEqual('data');
    }));
});
describe('generateAuthToken -', () => {
  const user = jest.fn();
  user.generateAuthToken = jest.fn(() => 'token');
  const result = generateAuthToken(user);
  test('should call the generateAuthToken method on User.', () => {
    expect(user.generateAuthToken).toHaveBeenCalled();
  });
  test('should return the correct data.', () =>
    result.then((data) => {
      expect(data).toEqual('token');
    }));
});
