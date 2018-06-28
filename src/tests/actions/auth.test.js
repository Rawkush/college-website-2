import faker from 'faker';
import { ADMIN_LOGIN } from './../../utils/urls';
import { startAdminLoginMin } from './../../actions/auth';

describe('Actions', () => {
  describe('auth', () => {
    describe('startAdminLoginMin', () => {
      const user = {
        username: faker.internet.userName,
        password: faker.internet.password,
      };
      const axiosDep = jest.fn();
      axiosDep.post = jest.fn(() =>
        Promise.resolve({ data: { token: 'token' } })
      );
      const localStorageDep = jest.fn();
      localStorageDep.setItem = jest.fn();
      const dispatcher = jest.fn(() => {
        'LOGIN';
      });
      const dispatch = jest.fn();
      test('return the desired output.', () =>
        startAdminLoginMin({
          axiosDep,
          localStorageDep,
          dispatcher,
        })(user)(dispatch).then((res) => expect(res).toBe('success')));
      test('call the axios dependency with correct args.', () =>
        startAdminLoginMin({
          axiosDep,
          localStorageDep,
          dispatcher,
        })(user)(dispatch).then(() =>
          expect(axiosDep.post).toHaveBeenCalledWith(ADMIN_LOGIN, user)
        ));
      test('call the localStorage dependency with correct args.', () =>
        startAdminLoginMin({
          axiosDep,
          localStorageDep,
          dispatcher,
        })(user)(dispatch).then(() =>
          expect(localStorageDep.setItem).toHaveBeenCalledWith(
            'adminToken',
            'token'
          )
        ));
      test('call the dispatcher & dispatch dependency w/ correct args.', () =>
        startAdminLoginMin({
          axiosDep,
          localStorageDep,
          dispatcher,
        })(user)(dispatch).then(() => {
          expect(dispatcher).toHaveBeenCalled();
          expect(dispatch).toHaveBeenCalledWith(dispatcher());
        }));
    });
  });
});
