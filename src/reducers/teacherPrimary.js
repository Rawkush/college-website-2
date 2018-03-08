const teacherDefaultState = {};

export default (state = teacherDefaultState, action) => {
  switch (action.type) {
    case 'LOGIN_TEACHER':
      return { auth: true };
    case 'SET_TEACHER':
      return { ...state, ...action.teacher };
    case 'TEACHER_LOGOUT':
      return {};
    default:
      return state;
  }
};
