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
