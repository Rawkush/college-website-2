import axios from 'axios';

export const addstudent = (student) => ({
  type: 'ADD_STUDENT',
  student,
});

export const startAddStudent = (data) => (dispatch) =>
  axios({
    method: 'post',
    url: 'http://localhost:3000/s/student/registeration',
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
      url: 'http://localhost:3000/s/student/getstudent',
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
    url: 'http://localhost:3000/s/student/updateprofile',
    data,
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(editStudent(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

const removeStudent = (student) => ({
  type: 'REMOVE_STUDENT',
  student,
});

export const startRemoveStudent = (_id) => (dispatch) =>
  axios({
    method: 'delete',
    url: 'http://localhost:3000/s/admin/deletesyll',
    data: {
      _id,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(removeStudent(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
