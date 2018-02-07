const studentDefaultState = {};

export default (state = studentDefaultState, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return action.student;
    case 'SET_STUDENT':
      return action.student;
    case 'EDIT_STUDENT':
      return action.student;
    case 'REMOVE_STUDENT':
      return {};
    default:
      return state;
  }
};
