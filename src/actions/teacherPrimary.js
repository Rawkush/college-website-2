import axios from 'axios';

export const login = () => ({
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
      dispatch(login());
      dispatch(setTeacher(res.data.user));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));

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
  axios
    .patch('http://localhost:3000/s/teacher/updateprofile', { ...data })
    .then((res) => {
      dispatch(setTeacher(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

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
