import axios from 'axios';

export const addSyllabus = (syllabus) => ({
  type: 'ADD_SYLLABUS',
  syllabus,
});

export const startAddSyllabus = ({
  branch = '',
  codeNo = '',
  semester = '',
  subject = '',
  l = '',
  tp = '',
  credits = '',
  status = '',
  period = '',
  type = '',
  file = '',
}) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('branch', branch);
  formdata.append('codeNo', codeNo);
  formdata.append('semester', semester);
  formdata.append('subject', subject);
  formdata.append('l', l);
  formdata.append('tp', tp);
  formdata.append('credits', credits);
  formdata.append('status', status);
  formdata.append('period', period);
  formdata.append('type', type);
  formdata.append('file', file);
  return axios({
    method: 'post',
    url: 'http://localhost:3000/s/admin/addsyll',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(addSyllabus(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const setSyllabus = (syllabus) => ({
  type: 'SET_SYLLABUS',
  syllabus,
});

export const startSetSyllabus = () => (dispatch) =>
  axios.get('http://localhost:3000/s/visitor/getsyll').then((res) => {
    dispatch(setSyllabus(res.data));
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
    googleForm ? 'googleform' : '',
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
  formdata.append('link', link);
  formdata.append('removeFile', removeFile);
  tags.map((tag) => formdata.append('tags[]', tag));
  if (file instanceof Blob) {
    formdata.append('file', file);
    formdata.append('removeFile', false);
  }
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/admin/editnotification',
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
    url: 'http://localhost:3000/s/admin/deletenotification',
    data: {
      _id,
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
