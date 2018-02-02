const notificationsDefaultState = [];

export default (state = notificationsDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [...state, action.notification];
    case 'SET_NOTIFICATIONS':
      return action.notifications;
    case 'EDIT_NOTIFICATION':
      return state.map((notification) => {
        if (notification._id === action.notification._id) {
          return {
            ...notification,
            ...action.notification,
          };
        }
        return notification;
      });
    case 'REMOVE_EXPENSE':
      return state.filter(
        (notification) => notification._id !== action.notification._id
      );
    default:
      return state;
  }
};
