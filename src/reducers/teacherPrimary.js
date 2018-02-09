const teacherDefaultState = {};

export default (state = teacherDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TEACHER':
      return action.teacher;
    default:
      return state;
  }
};
