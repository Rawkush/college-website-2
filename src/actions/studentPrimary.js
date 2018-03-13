import axios from 'axios';

export const studentlogin = () => ({
  type: 'STUDENT_LOGIN',
});

export const startStudentLogin = (token) => (dispatch) =>
  axios
    .post('/s/student/login', { token })
    .then((res) => {
      localStorage.setItem('studentToken', res.data.token);
      dispatch(studentlogin());
      return Promise.resolve('success');
    })
    .catch((err) => Promise.reject(err));

export const studentLogout = () => ({
  type: 'STUDENT_LOGOUT',
});

export const startStudentLogout = () => (dispatch) =>
  axios
    .post('/s/student/logout', {
      token: localStorage.getItem('studentToken'),
    })
    .then(() => {
      localStorage.removeItem('studentToken');
      dispatch(studentLogout());
      return Promise.resolve();
    })
    .catch(() => Promise.reject());

export const addstudent = (student) => ({
  type: 'ADD_STUDENT',
  student,
});

export const startAddStudent = (data) => (dispatch) =>
  axios({
    method: 'post',
    url: '/s/student/registeration',
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(addstudent(res.data.user));
      localStorage.setItem('studentToken', res.data.token);
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));

export const setStudent = (student) => ({
  type: 'SET_STUDENT',
  student,
});

export const startSetStudent = () => (dispatch) => {
  const token = localStorage.getItem('studentToken');
  if (token) {
    axios({
      method: 'post',
      url: '/s/student/getstudent',
      data: { token },
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    }).then((res) => {
      dispatch(setStudent(res.data));
    });
  }
};

export const editStudent = (student) => ({
  type: 'EDIT_STUDENT',
  student,
});

export const startEditStudent = ({
  admittedIn = '',
  bio = '',
  branch = '',
  dateOfBirth = '',
  email = '',
  gender = '',
  location = '',
  name = '',
  rollNo = '',
  profile0 = '',
  profile1 = '',
  profile2 = '',
  profile3 = '',
  profile4 = '',
  url0 = '',
  url1 = '',
  url2 = '',
  url3 = '',
  url4 = '',
}) => (dispatch) => {
  const linkedProfilesTemp = [
    { provider: profile0, url: url0 },
    { provider: profile1, url: url1 },
    { provider: profile2, url: url2 },
    { provider: profile3, url: url3 },
    { provider: profile4, url: url4 },
  ];
  const linkedProfiles = linkedProfilesTemp.filter(
    (linkedProfile) => linkedProfile.provider !== '' && linkedProfile.url !== ''
  );
  const data = {
    admittedIn,
    bio,
    branch,
    dateOfBirth,
    email,
    gender,
    location,
    name,
    rollNo,
    linkedProfiles,
    token: localStorage.getItem('studentToken'),
  };
  return axios({
    method: 'patch',
    url: '/s/student/updateprofile',
    data,
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(editStudent(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

const removeStudent = () => ({
  type: 'REMOVE_STUDENT',
});

export const startRemoveStudent = () => (dispatch) =>
  axios({
    method: 'delete',
    url: '/s/student/deleteprofile',
    data: {
      token: localStorage.getItem('studentToken'),
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => {
      dispatch(removeStudent());
      localStorage.removeItem('studentToken');
      studentLogout();
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
