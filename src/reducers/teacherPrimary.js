const teacherDefaultState = {};

export default (state = teacherDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TEACHER':
      return action.teacher;
    case 'SET_TEACHER':
      return action.teacher;
    case 'EDIT_TEACHER':
      return action.teacher;
    case 'REMOVE_TOKEN':
      return {};
    default:
      return state;
  }
};
