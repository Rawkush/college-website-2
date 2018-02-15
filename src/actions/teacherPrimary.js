import axios from 'axios';

export const teacherLogin = () => ({
  type: 'TEACHER_LOGIN',
});

export const setTeacher = (teacher) => ({
  type: 'SET_TEACHER',
  teacher,
});

export const startLoginTeacher = ({ email, password }) => (dispatch) =>
  axios
    .post('http://localhost:3000/s/teacher/login', {
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem('teacherToken', res.data.token);
      dispatch(teacherLogin());
      dispatch(setTeacher(res.data.user));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));

export const teacherLogout = () => ({
  type: 'TEACHER_LOGOUT',
});

export const startTeacherLogout = () => (dispatch) =>
  axios
    .post('http://localhost:3000/s/teacher/logout', {
      token: localStorage.getItem('teacherToken'),
    })
    .then(() => {
      localStorage.removeItem('teacherToken');
      dispatch(teacherLogout());
      return Promise.resolve();
    })
    .catch(() => Promise.reject());

export const startEditTeacher = ({
  name = '',
  dateOfBirth = '',
  gender = '',
  password = '',
  currentPosition = '',
}) => (dispatch) => {
  const data = {
    name,
    dateOfBirth,
    gender,
    currentPosition,
    token: localStorage.getItem('teacherToken'),
  };
  if (password) {
    data.password = password;
  }
  return axios
    .patch('http://localhost:3000/s/teacher/updateprofile', { ...data })
    .then((res) => {
      dispatch(setTeacher(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const startSetTeacher = () => (dispatch) => {
  const token = localStorage.getItem('teacherToken');
  if (token) {
    axios({
      method: 'post',
      url: 'http://localhost:3000/s/teacher/getteacher',
      data: {
        token,
      },
      config: { headers: { 'content-Type': 'application/json' } },
    }).then((res) => {
      dispatch(setTeacher(res.data));
    });
  }
};

export const editTeacher = (teacher) => ({
  type: 'EDIT_TEACHER',
  teacher,
});

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
