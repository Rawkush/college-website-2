import axios from 'axios';

export const addNotification = (notification) => ({
  type: 'ADD_NOTIFICATION',
  notification,
});

export const startAddNotification = ({
  title = '',
  description = '',
  student = '',
  teacher = '',
  iyear = '',
  iiyear = '',
  iiiyear = '',
  ivyear = '',
  googleForm = '',
  pdf = '',
  external = '',
  civil = '',
  it = '',
  env = '',
  file = '',
  link = '',
}) => (dispatch) => {
  const formdata = new FormData();
  const tagsUnfiltered = [
    student ? 'student' : '',
    teacher ? 'teacher' : '',
    iyear ? 'iyear' : '',
    iiyear ? 'iiyear' : '',
    iiiyear ? 'iiiyear' : '',
    ivyear ? 'ivyear' : '',
    googleForm ? 'googleForm' : '',
    pdf ? 'pdf' : '',
    external ? 'external' : '',
    civil ? 'civil' : '',
    it ? 'it' : '',
    env ? 'env' : '',
  ];
  const tags = tagsUnfiltered.filter((tag) => tag !== '');
  formdata.append('title', title);
  formdata.append('description', description);
  formdata.append('link', link);
  tags.map((tag) => formdata.append('tags[]', tag));
  formdata.append('file', file);
  formdata.append('token', localStorage.getItem('adminToken'));

  return axios({
    method: 'post',
    url: '/s/admin/addnotification',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(addNotification(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const setNotification = (notifications) => ({
  type: 'SET_NOTIFICATIONS',
  notifications,
});

export const startSetNotification = () => (dispatch) =>
  axios.get('/s/visitor/getNotifications').then((res) => {
    dispatch(setNotification(res.data));
  });

export const startSetAllNotification = () => (dispatch) =>
  axios.get('/s/visitor/getallNotifications').then((res) => {
    dispatch(setNotification(res.data));
  });

export const editNotification = (notification) => ({
  type: 'EDIT_NOTIFICATION',
  notification,
});

export const startEditNotification = (
  {
    title = '',
    description = '',
    student = '',
    teacher = '',
    iyear = '',
    iiyear = '',
    iiiyear = '',
    ivyear = '',
    googleForm = '',
    pdf = '',
    external = '',
    civil = '',
    it = '',
    env = '',
    file = '',
    link = '',
    removeFile = '',
  },
  _id
) => (dispatch) => {
  const formdata = new FormData();
  const tagsUnfiltered = [
    student ? 'student' : '',
    teacher ? 'teacher' : '',
    iyear ? 'iyear' : '',
    iiyear ? 'iiyear' : '',
    iiiyear ? 'iiiyear' : '',
    ivyear ? 'ivyear' : '',
    googleForm ? 'googleForm' : '',
    pdf ? 'pdf' : '',
    external ? 'external' : '',
    civil ? 'civil' : '',
    it ? 'it' : '',
    env ? 'env' : '',
  ];
  const tags = tagsUnfiltered.filter((tag) => tag !== '');
  formdata.append('_id', _id);
  formdata.append('title', title);
  formdata.append('description', description);
  formdata.append('token', localStorage.getItem('adminToken'));
  formdata.append('link', link);
  formdata.append('removeFile', removeFile);
  tags.map((tag) => formdata.append('tags[]', tag));
  if (file instanceof Blob) {
    formdata.append('file', file);
    formdata.append('removeFile', false);
  }
  return axios({
    method: 'patch',
    url: '/s/admin/editnotification',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(editNotification(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

const removeNotification = (notification) => ({
  type: 'REMOVE_NOTIFICATION',
  notification,
});

export const startRemoveNotification = (_id) => (dispatch) =>
  axios({
    method: 'delete',
    url: '/s/admin/deletenotification',
    data: {
      _id,
      token: localStorage.getItem('adminToken'),
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(removeNotification(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
