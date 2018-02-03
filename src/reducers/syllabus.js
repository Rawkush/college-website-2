const syllabusDefaultState = [];

export default (state = syllabusDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SYLLABUS':
      return [...state, action.syllabus];
    case 'SET_SYLLABUS':
      return action.syllabus;
    case 'EDIT_SYLLABUS':
      return state.map((syllabus) => {
        if (syllabus._id === action.syllabus._id) {
          return {
            ...syllabus,
            ...action.syllabus,
          };
        }
        return syllabus;
      });
    case 'REMOVE_SYLLABUS':
      return state.filter((syllabus) => syllabus._id !== action.syllabus._id);
    default:
      return state;
  }
};
