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

export const editSyllabus = (syllabus) => ({
  type: 'EDIT_SYLLABUS',
  syllabus,
});

export const startEditSyllabus = (
  {
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
  },
  _id
) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('_id', _id);
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
  if (file instanceof Blob) {
    formdata.append('file', file);
  }
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/admin/editsyll',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(editSyllabus(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

const removeSyllabus = (syllabus) => ({
  type: 'REMOVE_SYLLABUS',
  syllabus,
});

export const startRemoveSyllabus = (_id) => (dispatch) =>
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
      dispatch(removeSyllabus(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
