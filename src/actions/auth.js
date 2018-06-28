import axios from 'axios';

export const adminlogin = () => ({
  type: 'ADMIN_LOGIN',
});

export const startAdminLoginMin = ({
  axiosDep,
  localStorageDep,
  dispatcher,
}) => ({ username, password }) => (dispatch) =>
  axiosDep
    .post('/s/admin/login', {
      username,
      password,
    })
    .then((res) => {
      localStorageDep.setItem('adminToken', res.data.token);
      dispatch(dispatcher());
      return Promise.resolve('success');
    })
    .catch((err) => Promise.reject(err));

export const startAdminLogin = startAdminLoginMin({
  axiosDep: axios,
  localStorageDep: window.localStorage,
  dispatcher: adminlogin,
});

export const adminLogout = () => ({
  type: 'ADMIN_LOGOUT',
});

export const startAdminLogout = () => (dispatch) =>
  axios
    .post('/s/admin/logout', {
      token: localStorage.getItem('adminToken'),
    })
    .then(() => {
      localStorage.removeItem('adminToken');
      dispatch(adminLogout());
      return Promise.resolve();
    })
    .catch(() => Promise.reject());

export const studentlogin = () => ({
  type: 'STUDENT_LOGIN',
});

export const startStudentLogin = ({ username, password }) => (dispatch) =>
  axios
    .post('/s/student/login', {
      username,
      password,
    })
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

export const teacherlogin = () => ({
  type: 'TEACHER_LOGIN',
});

export const startTeacherLogin = ({ username, password }) => (dispatch) =>
  axios
    .post('/s/teacher/login', {
      username,
      password,
    })
    .then((res) => {
      localStorage.setItem('teacherToken', res.data.token);
      dispatch(teacherlogin());
      return Promise.resolve('success');
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
