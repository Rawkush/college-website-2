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
    .post('/s/teacher/login', {
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
    .post('/s/teacher/logout', {
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
  photo,
}) => (dispatch) => {
  console.log(gender);
  console.log(photo);
  const formdata = new FormData();
  formdata.append('name', name);
  formdata.append('dateOfBirth', dateOfBirth);
  formdata.append('gender', gender);
  formdata.append('currentPosition', currentPosition);
  formdata.append('token', localStorage.getItem('teacherToken'));
  if (password) {
    formdata.append('password', password);
  }
  if (photo instanceof Blob) {
    formdata.append('photo', photo);
  }

  return axios({
    method: 'patch',
    url: '/s/teacher/updateprofile',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
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
      url: '/s/teacher/getteacher',
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
    url: '/s/teacher/deleteprofile',
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
