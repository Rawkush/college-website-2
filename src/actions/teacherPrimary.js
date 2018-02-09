import axios from 'axios';

export const addTeacher = (teacher) => ({
  type: 'ADD_TEACHER',
  teacher,
});
export const startAddTeacher = (data) => (dispatch) =>
  axios({
    method: 'post',
    url: 'http://localhost:3000/s/teacher/registeration',
    data,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(addTeacher(res.data.user));
      localStorage.setItem('teacherToken', res.data.token);
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));

export const setTeacher = (teacher) => ({
  type: 'SET_TEACHER',
  teacher,
});

export const startSetTeacher = () => (dispatch) => {
  const token = localStorage.getItem('teacherToken');
  if (token) {
    axios({
      method: 'post',
      url: 'http://localhost:3000/s/teacher/getteacher',
      config: { headers: { 'content-Type': 'multipart/form-data' } },
    }).then((res) => {
      dispatch(setTeacher(res.data));
    });
  }
};

export const editTeacher = (teacher) => ({
  type: 'EDIT_TEACHER',
  teacher,
});

export const startEditTeacher = ({
  name = '',
  email = '',
  dateOfBirth = '',
  currentPosition = '',
  gender = '',
}) => (dispatch) => {
  const data = {
    name,
    email,
    dateOfBirth,
    currentPosition,
    gender,
  };
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/updateprofile',
    data,
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(editTeacher(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

const removeTeacher = () => ({
  type: 'REMOVE_TEACHER',
});

export const startRemoveTeacher = () => (dispatch) =>
  axios({
    method: 'delete',
    url: 'http://localhost:3000/s/teacher/deleteprofile',
    data: {
      token: localStorage.getItem('teacherToken'),
    },
    header: {
      'content-Type': 'application/json',
    },
  })
    .then(() => {
      dispatch(removeTeacher());
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
