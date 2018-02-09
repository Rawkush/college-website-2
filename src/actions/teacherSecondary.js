import axios from 'axios';

export const addNotification = (notification) => ({
  type: 'ADD_TEACHER_NOTIFICATION',
  notification,
});

export const startAddNotification = ({
  title = '',
  description = '',
  branch = '',
  year = '',
  rollNo = '',
  file = '',
  link = '',
} = {}) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('title', title);
  formdata.append('description', description);
  formdata.append('link', link);
  formdata.append('branch', branch);
  formdata.append('year', year);
  formdata.append('rollNo', rollNo);
  formdata.append('file', file);
  // TODO: Make this thing Dynamic
  formdata.append('_id', '5a7b04a6a77e41245c084c23');
  return axios({
    method: 'post',
    url: 'http://localhost:3000/s/teacher/addnotification',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(addNotification(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};
