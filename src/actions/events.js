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
  formdata.append('photo', mainPhoto);
  formdata.append('photo', photo1);
  formdata.append('photo', photo2);
  formdata.append('photo', photo3);
  formdata.append('photo', photo4);
  formdata.append('description', description);
  return axios({
    method: 'post',
    url: 'http://localhost:3000/s/admin/addevent',
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
  axios.get('http://localhost:3000/s/visitor/getallevents').then((res) => {
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
  };
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/admin/editevent',
    data,
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');
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
    url: 'http://localhost:3000/s/admin/deleteevent',
    data: {
      _id,
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
