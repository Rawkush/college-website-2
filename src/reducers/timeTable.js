const timeTableDefaultState = [];

export default (state = timeTableDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TIMETABLE':
      return [...state, action.timeTable];
    case 'SET_TIMETABLE':
      return action.timeTable;
    case 'EDIT_TIMETABLE':
      return state.map((timeTable) => {
        if (timeTable._id === action.timeTable._id) {
          return {
            ...timeTable,
            ...action.timeTable,
          };
        }
        return timeTable;
      });
    case 'REMOVE_TIMETABLE':
      return state.filter(
        (timeTable) => timeTable._id !== action.timeTable._id
      );
    default:
      return state;
  }
};
