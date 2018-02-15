const teacherSecondaryDefaultState = {
  notifications: [],
  work: [],
  education: [],
  specialisation: [],
  technicalSkills: [],
  committee: [],
};

export default (state = teacherSecondaryDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TEACHER_NOTIFICATION':
      return {
        ...state,
        notifications: [...state.notifications, action.notification],
      };
    case 'EDIT_TEACHER_NOTIFICATION':
      return {
        ...state,
        notifications: [
          ...state.notifications.filter(
            (notification) => notification._id !== action.notification._id
          ),
          action.notification,
        ],
      };
    case 'REMOVE_TEACHER_NOTIFICATION':
      return {
        ...state,
        notifications: [
          ...state.notifications.filter(
            (notification) => notification._id !== action.notification._id
          ),
        ],
      };
    case 'SET_TEACHER_SECONDARY':
      return { ...state, ...action.secondary };
    default:
      return state;
  }
};

