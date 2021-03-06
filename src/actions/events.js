import axios from 'axios';

export const addEvent = (event) => ({
  type: 'ADD_EVENT',
  event,
});

export const startAddEvent = ({
  name = '',
  date = '',
  place = '',
  type = '',
  mainPhoto = '',
  photo1 = '',
  photo2 = '',
  photo3 = '',
  photo4 = '',
  description = '',
}) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('name', name);
  formdata.append('date', date);
  formdata.append('place', place);
  formdata.append('type', type);
  formdata.append('token', localStorage.getItem('adminToken'));
  formdata.append('photo', mainPhoto);
  formdata.append('photo', photo1);
  formdata.append('photo', photo2);
  formdata.append('photo', photo3);
  formdata.append('photo', photo4);
  formdata.append('description', description);
  return axios({
    method: 'post',
    url: '/s/admin/addevent',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(addEvent(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const setEvent = (event) => ({
  type: 'SET_EVENT',
  event,
});

export const startSetEvent = () => (dispatch) =>
  axios.get('/s/visitor/getallevents').then((res) => {
    dispatch(setEvent(res.data));
  });

export const editEvent = (event) => ({
  type: 'EDIT_EVENT',
  event,
});

export const startEditEvent = (
  { name = '', date = '', place = '', type = '', description = '' },
  _id
) => (dispatch) => {
  const data = {
    name,
    date,
    place,
    type,
    description,
    _id,
    token: localStorage.getItem('adminToken'),
  };
  return axios({
    method: 'patch',
    url: '/s/admin/editevent',
    data,
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(editEvent(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

const removeEvent = (event) => ({
  type: 'REMOVE_EVENT',
  event,
});

export const startRemoveEvent = (_id) => (dispatch) =>
  axios({
    method: 'delete',
    url: '/s/admin/deleteevent',
    data: {
      _id,
      token: localStorage.getItem('adminToken'),
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(removeEvent(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
