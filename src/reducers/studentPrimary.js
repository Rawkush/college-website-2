const studentDefaultState = {
  _id: '5a78302d13676f2228731ca2',
  name: 'S.R. Aman',
  rollNo: 22555555555,
  location: 'New Delhi, India',
  dateOfBirth: '1999-01-12T00:00:00.000Z',
  branch: 'it',
  admittedIn: '2016-08-01T00:00:00.000Z',
  bio:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  photo:
    'https://lh3.googleusercontent.com/-Yd-rinwgYRE/AAAAAAAAAAI/AAAAAAAAAfc/YFIW0O2doho/photo.jpg?sz=50',
  linkedProfiles: [
    {
      provider: 'google',
      linkedId: '111536082694632398306',
      url: 'https://plus.google.com/111536082694632398306',
      _id: '5a78302d13676f2228731ca3',
    },
  ],
};

export default (state = studentDefaultState, action) => {
  switch (action.type) {
    case 'ADD_STUDENT':
      return action.student;
    case 'SET_STUDENT':
      return action.student;
    case 'EDIT_STUDENT':
      return action.student;
    case 'REMOVE_STUDENT':
      return {};
    default:
      return state;
  }
};
