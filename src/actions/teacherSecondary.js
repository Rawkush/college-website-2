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
  formdata.append('token', localStorage.getItem('teacherToken'));
  return axios({
    method: 'post',
    url: '/s/teacher/addnotification',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(addNotification(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const editNotification = (notification) => ({
  type: 'EDIT_TEACHER_NOTIFICATION',
  notification,
});

export const startEditNotification = ({
  title = '',
  description = '',
  branch = '',
  year = '',
  rollNo = '',
  file = '',
  link = '',
  _id = '',
} = {}) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('title', title);
  formdata.append('description', description);
  formdata.append('link', link);
  formdata.append('branch', branch);
  formdata.append('year', year);
  formdata.append('rollNo', rollNo);
  formdata.append('file', file);
  formdata.append('token', localStorage.getItem('teacherToken'));
  formdata.append('_id', _id);
  return axios({
    method: 'post',
    url: '/s/teacher/updatenotification',
    data: formdata,
    config: { headers: { 'Content-Type': 'multipart/form-data' } },
  })
    .then((res) => {
      dispatch(editNotification(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const removeNotification = (notification) => ({
  type: 'EDIT_TEACHER_NOTIFICATION',
  notification,
});

export const startRemoveNotification = (_id = '') => (dispatch) => {
  const data = {
    _id,
    token: localStorage.getItem('teacherToken'),
  };
  return axios({
    method: 'delete',
    url: '/s/teacher/removenotification',
    data,
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(removeNotification(res.data));
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
    url: '/s/teacher/getteachersecondary',
    data: { token: localStorage.getItem('teacherToken') },
    config: { headers: { 'Content-Type': 'application/json' } },
  }).then((res) => {
    dispatch(
      setTeacherSecondary({
        ...res.data[0],
        notifications: res.data.notifications,
      })
    );
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
    url: '/s/teacher/addwork',
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
    url: '/s/teacher/updatework',
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
    url: '/s/teacher/removework',
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
    url: '/s/teacher/updatetechnicalskill',
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
export const startAddCommittee = ({
  name = '',
  designation = '',
  status = '',
}) => (dispatch) => {
  const data = {
    name,
    designation,
    status,
    token: localStorage.getItem('teacherToken'),
  };
  return axios({
    method: 'post',
    url: '/s/teacher/addcommittee',
    data,
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(setTeacherSecondary(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const startEditCommittee = ({
  name = '',
  designation = '',
  status = '',
  _id = '',
}) => (dispatch) => {
  const data = {
    name,
    designation,
    status,
    _id,
    token: localStorage.getItem('teacherToken'),
  };
  return axios({
    method: 'patch',
    url: '/s/teacher/updatecommittee',
    data,
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(setTeacherSecondary(res.data));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const startRemoveCommittee = (_id) => (dispatch) =>
  axios({
    method: 'delete',
    url: '/s/teacher/removecommittee',
    data: {
      token: localStorage.getItem('teacherToken'),
      _id,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(setTeacherSecondary(res.data));
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
    url: '/s/teacher/updatespecialisation',
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
    url: '/s/teacher/updateeducation',
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
