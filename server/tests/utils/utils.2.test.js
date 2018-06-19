const {
  saveMinimal,
  // saveMinimal2,
  // updateMinimal,
  // pickTechnicalSkills,
  // generateAuthToken,
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
// describe('saveMinimal2 -', () => {
//   const body = { name: 'sample', age: 20 };
//   const Model = jest.fn();
//   Model.prototype.save = jest.fn().returns(body);
//   const saveUserMinimal2 = saveMinimal2(Model);
//   const res = saveUserMinimal2(body);
//   test('should call the Model with new keyword.', () => {
//     expect(Model.calledWithNew()).toBeTruthy();
//   });
//   test('should call the Model w/ correct args.', () => {
//     expect(Model.calledWithExactly(body)).toBeTruthy();
//   });
//   test('should call the save Method on the Model.', () => {
//     expect(Model.prototype.save.called).toBeTruthy();
//   });
//   test('should return the correct value.', (done) => {
//     res.then((data) => {
//       expect(data).toEqual(body);
//       done();
//     });
//   });
// });
// describe('updateMinimal -', () => {
//   const Model = jest.fn();
//   Model.findOneAndUpdate = jest.fn().returns('data');
//   const runValidators = true;
//   const upsert = true;
//   const condition = { _id: 123 };
//   const updateModelMinimal = updateMinimal(Model, runValidators, upsert);
//   const body = { name: 'Aman' };
//   const res = updateModelMinimal(condition, body);
//   test('should call the findOndAndUpdate method on Model.', () => {
//     expect(Model.findOneAndUpdate.called).toBeTruthy();
//   });
//   test('should call the findOneAndUpdate method w/ correct args.', () => {
//     expect(
//       Model.findOneAndUpdate.calledWithExactly(condition, body, {
//         new: true,
//         runValidators,
//         upsert,
//       })
//     ).toBeTruthy(); // eslint-disable-line
//   });
//   test('should return the correct data.', (done) => {
//     res.then((data) => {
//       expect(data).to.equal('data');
//       done();
//     });
//   });
// });
// describe('generateAuthToken -', () => {
//   const user = jest.fn();
//   user.generateAuthToken = jest.fn().returns('token');
//   const res = generateAuthToken(user);
//   test('should call the generateAuthToken method on User.', () => {
//     expect(user.generateAuthToken.called).toBeTruthy();
//   });
//   test('should return the correct data.', (done) => {
//     res.then((data) => {
//       expect(data).to.equal('token');
//       done();
//     });
//   });
// });
// describe('generateAuthToken -', () => {
//   const user = jest.fn();
//   user.generateAuthToken = jest.fn().returns('token');
//   const res = generateAuthToken(user);
//   test('should call the generateAuthToken method on User.', () => {
//     expect(user.generateAuthToken.called).toBeTruthy();
//   });
//   test('should return the correct data.', (done) => {
//     res.then((data) => {
//       expect(data).to.equal('token');
//       done();
//     });
//   });
// });
// describe('decodeAuthTokenMinimal -', () => {
//   const Model = jest.fn();
//   Model.decodeProviderAndId = jest.fn().returns('token');
//   const decodeAuthToken = decodeAuthTokenMinimal(Model);
//   const res = decodeAuthToken('abcd');
//   test('should call the generateAuthToken method on User.', () => {
//     expect(Model.decodeProviderAndId.called).toBeTruthy();
//   });
//   test('should return the correct data.', (done) => {
//     res.then((data) => {
//       expect(data).to.equal('token');
//       done();
//     });
//   });
//   test('should call the decodeProviderAndId w/ correct args.', () => {
//     expect(Model.decodeProviderAndId.calledWithExactly('abcd')).toBeTruthy();
//   });
// });
// describe('deleteMinimal -', () => {
//   const Model = jest.fn();
//   const body = { name: 'sample', age: 20 };
//   Model.findByIdAndRemove = jest.fn().returns(body);
//   const id = 'kjdsjfdsahf';
//   const deleteUser = deleteMinimal(Model);
//   const res = deleteUser(id);
//   test('should call the findOneAndRemove method on User.', () => {
//     expect(Model.findByIdAndRemove.called).toBeTruthy();
//   });
//   test('should call the findByIdAndRemove w/ correct args.', () => {
//     expect(Model.findByIdAndRemove.calledWithExactly(id)).toBeTruthy();
//   });
//   test('should return the correct data.', (done) => {
//     res.then((data) => {
//       expect(data).to.equal(body);
//       done();
//     });
//   });
// });
// describe('checkUserMinimal -', () => {
//   const Model = jest.fn();
//   const body = { name: 'sample', age: 20 };
//   Model.findByProviderAndId = jest.fn().returns(body);
//   const token = 'kjdsjfdsahf';
//   const checkUser = checkUserMinimal(Model);
//   const res = checkUser(token);
//   test('should call the findByProviderAndId method on User.', () => {
//     expect(Model.findByProviderAndId.called).toBeTruthy();
//   });
//   test('should call the findByProviderAndId w/ correct args.', () => {
//     expect(Model.findByProviderAndId.calledWithExactly(token)).toBeTruthy();
//   });
//   test('should return the correct data.', (done) => {
//     res.then((data) => {
//       expect(data).to.equal(body);
//       done();
//     });
//   });
// });
// describe('removeTokenMinimal -', () => {
//   const user = jest.fn();
//   const body = { name: 'sample', age: 20 };
//   const token = 'jkfaskjdhfj';
//   user.removeToken = jest.fn().returns(body);
//   removeTokenMinimal(user, token);
//   test('should call the removeToken method on User.', () => {
//     expect(user.removeToken.called).toBeTruthy();
//   });
//   test('should call the removeToken w/ correct args.', () => {
//     expect(user.removeToken.calledWithExactly(token)).toBeTruthy();
//   });
// });
// describe('deleteSecondaryMinimal -', () => {
//   const Model = jest.fn();
//   Model.findOneAndRemove = jest.fn();
//   const _id = 'akjfsdkf'; // eslint-disable-line
//   const body = { _creator: _id };
//   const deleteSecondary = deleteSecondaryMinimal(Model);
//   deleteSecondary(_id);
//   test('should call the findOneAndRemove method on User.', () => {
//     expect(Model.findOneAndRemove.called).toBeTruthy();
//   });
//   test('should call the removeToken w/ correct args.', () => {
//     expect(Model.findOneAndRemove.calledWithExactly(body)).toBeTruthy();
//   });
// });
// describe('loginLocal -', () => {
//   const email = 'abc@gmail.com';
//   const password = '123';
//   const user = jest.fn();
//   user.generateAuthToken = jest.fn().returns('token');
//   user.toJSON = jest.fn().returns({ name: 'sample', age: 20 });
//   const Model = jest.fn();
//   Model.findByCredentials = jest.fn().returns(user);
//   const loginLocalMinimal = loginLocal(Model);
//   const res = loginLocalMinimal(email, password);
//   test('should call the method findByCredential on Model w/ correct args.', () => {
//     expect(
//       Model.findByCredentials.calledWithExactly(email, password)
//     ).toBeTruthy();
//   });
//   test('should call the generateAuthToken on returned user.', () => {
//     expect(user.generateAuthToken.called).toBeTruthy();
//   });
//   test('should call the toJSON method on return user.', () => {
//     expect(user.toJSON.called).toBeTruthy();
//   });
//   test('should return the correct value.', (done) => {
//     res.then((data) => {
//       expect(data).toEqual({
//         user: { name: 'sample', age: 20 },
//         token: 'token',
//       });
//       done();
// });
// });
// });
