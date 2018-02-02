const eventsDefaultState = [];

export default (state = eventsDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.event];
    case 'SET_EVENT':
      return action.event;
    case 'EDIT_EVENT':
      return state.map((event) => {
        if (event._id === action.event._id) {
          return {
            ...event,
            ...action.event,
          };
        }
        return event;
      });
    case 'REMOVE_EVENT':
      return state.filter((event) => event._id !== action.event._id);
    default:
      return state;
  }
};
