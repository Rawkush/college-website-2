const secondaryDefaultState = {
  accomplishments: [],
  specialisation: [],
  projects: [],
  notifications: [],
};

export default (state = secondaryDefaultState, action) => {
  switch (action.type) {
    case 'SET_STUDENT_SECONDARY':
      return { ...state, ...action.studentSecondary };
    case 'ADD_ACCOMPLISHMENT':
      return { ...state, accomplishments: action.accomplishment };
    case 'ADD_PROJECT':
      return { ...state, projects: action.project };
    case 'UPDATE_SPECIALISATION':
      return { ...state, specialisation: action.specialisation };
    case 'EDIT_ACCOMPLISHMENT':
      return { ...state, accomplishments: action.accomplishment };
    case 'EDIT_PROJECT':
      return { ...state, projects: action.project };
    case 'MARK_AS_READ':
      return {
        ...state,
        notifications: [
          ...state.notifications.filter(
            (notification) => notification._id !== action._id
          ),
          {
            ...state.notifications.find(
              (notification) => notification._id === action._id
            ),
            read: true,
          },
        ],
      };
    default:
      return state;
  }
};
