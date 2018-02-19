import axios from 'axios';

export const addtimeTable = (timeTable) => ({
  type: 'ADD_TIMETABLE',
  timeTable,
});

export const startAddTimeTable = ({
  wef = '',
  title = '',
  file = '',
  semester = '',
}) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('wef', wef);
  formdata.append('title', title);
  formdata.append('semester', semester);
  formdata.append('file', file);
  formdata.append('token', localStorage.getItem('adminToken'));
  return axios({
    method: 'post',
    url: '/s/admin/addtt',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(addtimeTable(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const setTimeTable = (timeTable) => ({
  type: 'SET_TIMETABLE',
  timeTable,
});

export const startSetTimeTable = () => (dispatch) =>
  axios.get('/s/visitor/gettt').then((res) => {
    dispatch(setTimeTable(res.data));
  });

export const editTimeTable = (timeTable) => ({
  type: 'EDIT_TIMETABLE',
  timeTable,
});

export const startEditTimeTable = (
  { wef = '', title = '', file = '', semester = '' },
  _id
) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('_id', _id);
  formdata.append('wef', wef);
  formdata.append('title', title);
  formdata.append('token', localStorage.getItem('adminToken'));
  formdata.append('semester', semester);
  if (file instanceof Blob) {
    formdata.append('file', file);
  }
  return axios({
    method: 'patch',
    url: '/s/admin/edittt',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(editTimeTable(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

const removeTimeTable = (timeTable) => ({
  type: 'REMOVE_TIMETABLE',
  timeTable,
});

export const startRemoveTimeTable = (_id) => (dispatch) =>
  axios({
    method: 'delete',
    url: '/s/admin/deletett',
    data: {
      _id,
      token: localStorage.getItem('adminToken'),
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(removeTimeTable(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
