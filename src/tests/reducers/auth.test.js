import authReducer from './../../reducers/auth';

describe('Reducers -', () => {
  describe('"auth" Reducer', () => {
    test('should return the admin true state when "ADMIN_LOGIN" is passed as action type', () => {
      const result = authReducer(undefined, { type: 'ADMIN_LOGIN' });
      expect(result).toEqual({ admin: true });
    });
    test('should return the admin false state when "ADMIN_LOGOUT" is passed as action type', () => {
      const result = authReducer(undefined, { type: 'ADMIN_LOGOUT' });
      expect(result).toEqual({ admin: false });
    });
    test('should return the teacher true state when "TEACHER_LOGIN" is passed as action type', () => {
      const result = authReducer(undefined, { type: 'TEACHER_LOGIN' });
      expect(result).toEqual({ teacher: true });
    });
    test('should return the teacher false state when "TEACHER_LOGOUT" is passed as action type', () => {
      const result = authReducer(undefined, { type: 'TEACHER_LOGOUT' });
      expect(result).toEqual({ teacher: false });
    });
    test('should return the teacher true state when "STUDENT_LOGIN" is passed as action type', () => {
      const result = authReducer(undefined, { type: 'STUDENT_LOGIN' });
      expect(result).toEqual({ student: true });
    });
    test('should return the teacher false state when "STUDENT_LOGOUT" is passed as action type', () => {
      const result = authReducer(undefined, { type: 'STUDENT_LOGOUT' });
      expect(result).toEqual({ student: false });
    });
    test('should return the previous state if none of the listed options is passed.', () => {
      const state = authReducer(undefined, { type: 'STUDENT_LOGIN' });
      const result = authReducer(state, { type: 'RANDOM_WORD' });
      expect(result).toEqual(state);
    });
    test('should return the previous state if no option is passed.', () => {
      const state = authReducer(undefined, { type: 'STUDENT_LOGIN' });
      const result = authReducer(state);
      expect(result).toEqual(state);
    });
  });
});
