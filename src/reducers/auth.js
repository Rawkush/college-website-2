const authDefaultState = {
  admin: false,
  student: false,
  teacher: false,
};

export default (state = authDefaultState, action) => {
  switch (action.type) {
    case 'ADMIN_LOGIN':
      return {
        admin: true,
      };
    case 'ADMIN_LOGOUT':
      return {
        admin: false,
      };
    case 'STUDENT_LOGIN':
      return {
        student: true,
      };
    case 'STUDENT_LOGOUT':
      return {
        student: false,
      };
    case 'TEACHER_LOGIN':
      return {
        teacher: true,
      };
    case 'TEACHER_LOGOUT':
      return {
        teacher: false,
      };
    default:
      return state;
  }
};
