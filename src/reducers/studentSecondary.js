const secondaryDefaultState = {
  accomplishments: [],
  specialisation: [],
  projects: [],
};

export default (state = secondaryDefaultState, action) => {
  switch (action.type) {
    case 'SET_STUDENT_SECONDARY':
      return { ...action.studentSecondary };
    case 'ADD_ACCOMPLISHMENT':
      return { ...state, accomplishments: action.accomplishment };
    case 'EDIT_ACCOMPLISHMENT':
      return { ...state, accomplishments: action.accomplishment };
    case 'REMOVE_ACCOMPLISHMENT':
      return {};
    default:
      return state;
  }
};
