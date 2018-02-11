const secondaryDefaultStore = {
  work: [],
  education: [],
  specialisation: [],
  technicalSkills: [],
  committes: [],
};

export default (state = secondaryDefaultStore, action) => {
  switch (action.type) {
    case 'SET_TEACHER_SECONDARY':
      return { ...action.teacherSecondary };
    case 'ADD_WORk':
      return { ...state, work: action.work };
    case 'EDIT_WORK':
      return { ...state, work: action.work };
    case 'ADD_TECHNICALSKILL':
      return { ...state, skill: action.skills };
    case 'EDIT_TECHNICALSKILL':
      return { ...state, skill: action.skills };
    case 'ADD_COMMITTE':
      return { ...state, committe: action.committe };
    case 'EDIT_COMMITTE':
      return { ...state, committe: action.committe };
    case 'UPDATE_SPECIALISATION':
      return { ...state, specialisation: action.specialisation };
    case 'UPDATE_EDUCATION':
      return { ...state, education: action.education };
    default:
      return state;
  }
};
