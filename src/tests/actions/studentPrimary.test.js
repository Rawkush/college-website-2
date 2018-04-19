import { studentlogin } from '../../actions/studentPrimary';

test('Should setup remove expense action object', () => {
  const result = studentlogin();
  expect(result).toEqual({ type: 'STUDENT_LOGIN' });
});
