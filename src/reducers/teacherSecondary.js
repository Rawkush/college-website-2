const teacherSecondaryDefaultState = {
  notifications: [],
};

export default (state = teacherSecondaryDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TEACHER_NOTIFICATION':
      return {
        ...state,
        notifications: action.notification,
      };
    default:
      return state;
  }
};
