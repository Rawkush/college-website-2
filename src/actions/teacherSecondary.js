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

// Setting all data
export const setTeacherSecondary = (secondary) => ({
  type: 'SET_TEACHER_SECONDARY',
  secondary,
});

export const startSetTeacherSecondary = () => (dispatch) =>
  axios({
    method: 'post',
    url: 'http://localhost:3000/s/teacher/getteachersecondary',
    data: { token: localStorage.getItem('teacherToken') },
    config: { headers: { 'Content-Type': 'application/json' } },
  }).then((res) => {
    dispatch(setTeacherSecondary(res.data[0]));
  });

export const startAddWork = ({ title = '', description = '' } = {}) => (
  dispatch
) => {
  const data = {
    title,
    description,
    token: localStorage.getItem('teacherToken'),
  };
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/addwork',
    data,
    config: { header: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(setTeacherSecondary(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const startEditWork = ({ title = '', _id = '', description = '' }) => (
  dispatch
) => {
  const data = {
    title,
    _id,
    description,
    token: localStorage.getItem('teacherToken'),
  };
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/updatework',
    data,
    config: { header: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(setTeacherSecondary(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const startRemoveWork = (_id) => (dispatch) =>
  axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/removework',
    data: {
      token: localStorage.getItem('teacherToken'),
      _id,
    },
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(setTeacherSecondary(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
// add technicalSkill
export const addTechnicalSkill = (technicalSkill) => ({
  type: 'ADD_TECHNICALSKILL',
  technicalSkill,
});

export const startAddTechnicalSkill = ({
  ts1 = '',
  ts2 = '',
  ts3 = '',
  ts4 = '',
  ts5 = '',
}) => (dispatch) => {
  const technicalSkillsTemp = [ts1, ts2, ts3, ts4, ts5];
  const technicalSkills = technicalSkillsTemp.filter((elem) => elem !== '');
  const data = {
    token: localStorage.getItem('teacherToken'),
    technicalSkills,
  };
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/updatetechnicalskill',
    data,
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(startSetTeacherSecondary(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

// committe
export const addCommitte = (committe) => ({
  type: 'ADD_COMMITTE',
  committe,
});

export const startAddCommitte = ({ committe = '' }) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('token', localStorage.getItem('teacherToken'));
  formdata.append('committe', committe);
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/addcommitte',
    date: formdata,
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(addCommitte(res.data.committes));
      return Promise.reject.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const editCommitte = (committe) => ({
  type: 'EDIT_COMMITTE',
  committe,
});

export const startEditCommitte = ({ committe = '', _id = '' }) => (
  dispatch
) => {
  const formdata = new FormData();
  formdata.append('token', localStorage.getItem('studentToken'));
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/student/updateaccomplishment',
    data: formdata,
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(editCommitte(res.data.committes));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const startRemoveCommitte = (_id) => (dispatch) =>
  axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/removecommitte',
    data: {
      token: localStorage.getItem('teacherToken'),
      _id,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(editCommitte(res.data.committes));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));

// update specialisation
export const startUpdateSpecialisation = ({
  sp1 = '',
  sp2 = '',
  sp3 = '',
  sp4 = '',
  sp5 = '',
}) => (dispatch) => {
  const specialisationTemp = [sp1, sp2, sp3, sp4, sp5];
  const specialisation = specialisationTemp.filter((elem) => elem !== '');

  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/updatespecialisation',
    data: {
      token: localStorage.getItem('teacherToken'),
      specialisation,
    },
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(setTeacherSecondary(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

// updateEduction
export const startUpdateEducation = ({
  e1 = '',
  e2 = '',
  e3 = '',
  e4 = '',
  e5 = '',
}) => (dispatch) => {
  const educationtemp = [e1, e2, e3, e4, e5];
  const education = educationtemp.filter((elem) => elem !== '');

  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/updateeducation',
    data: {
      token: localStorage.getItem('teacherToken'),
      education,
    },
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(setTeacherSecondary(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};
