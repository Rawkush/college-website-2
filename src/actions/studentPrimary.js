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

export const startSetStudent = () => (dispatch) =>
  axios.get('http://localhost:3000/s/visitor/gettt').then((res) => {
    dispatch(setStudent(res.data));
  });

export const editStudent = (student) => ({
  type: 'EDIT_STUDENT',
  student,
});

export const startEditStudent = (
  { wef = '', title = '', file = '', semester = '' },
  _id
) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('_id', _id);
  formdata.append('wef', wef);
  formdata.append('title', title);
  formdata.append('semester', semester);
  if (file instanceof Blob) {
    formdata.append('file', file);
  }
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/admin/edittt',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
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
