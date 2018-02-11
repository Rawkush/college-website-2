const teacherSecondaryDefaultState = {
  notifications: [],
  work: [],
  education: [],
  specialisation: [],
  technicalSkills: [],
  committees: [],
};

export default (state = teacherSecondaryDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TEACHER_NOTIFICATION':
      return {
        ...state,
        notifications: action.notification,
      };
    case 'SET_TEACHER_SECONDARY':
      return { ...state, ...action.secondary };
    default:
      return state;
  }
};

// export default (state = secondaryDefaultStore, action) => {
//   switch (action.type) {
//     case 'SET_TEACHER_SECONDARY':
//       return { ...action.teacherSecondary };
//     case 'ADD_WORk':
//       return { ...state, work: action.work };
//     case 'EDIT_WORK':
//       return { ...state, work: action.work };
//     case 'ADD_TECHNICALSKILL':
//       return { ...state, skill: action.skills };
//     case 'EDIT_TECHNICALSKILL':
//       return { ...state, skill: action.skills };
//     case 'ADD_COMMITTE':
//       return { ...state, committe: action.committe };
//     case 'EDIT_COMMITTE':
//       return { ...state, committe: action.committe };
//     case 'UPDATE_SPECIALISATION':
//       return { ...state, specialisation: action.specialisation };
//     case 'UPDATE_EDUCATION':
//       return { ...state, education: action.education };
//     default:
//       return state;
//   }
// };
