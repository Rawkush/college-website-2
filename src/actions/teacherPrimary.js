import axios from 'axios';

export const login = () => ({
  type: 'TEACHER_LOGIN',
});

export const startLoginTeacher = ({ email, password }) => (dispatch) =>
  axios
    .post('http://localhost:3000/s/teacher/login', {
      email,
      password,
    })
    .then((res) => {
      localStorage.setItem('teacherToken', res.data.token);
      dispatch(login());
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));

// export const startAddTeacher = (data) => (dispatch) =>
//   axios({
//     method: 'post',
//     url: 'http://localhost:3000/s/teacher/registeration',
//     data,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((res) => {
//       dispatch(addTeacher(res.data.user));
//       return Promise.resolve();
//     })
//     .catch((err) => Promise.reject(err));
