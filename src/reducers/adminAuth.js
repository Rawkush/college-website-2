export default (state = {}, action) => {
  switch (action.type) {
    case 'ADMIN_LOGIN':
      return {
        auth: true,
      };
    case 'ADMIN_LOGOUT':
      return {};

    default:
      return state;
  }
};
