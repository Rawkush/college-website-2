import axios from 'axios';
import { format } from 'url';

// Setting all data
export const setTeacherSecondary = (teacherSecondary) => ({
  type: 'SET_TEACHER_SECONDARY',
  teacherSecondary,
});

export const startSetStudentSecondary = () => (dispatch) =>
  axios({
    method: 'post',
    url: 'http://localhost:3000/s/teacher/getteachersecondary',
    data: { token: localStorage.getItem('teacherToken') },
    config: { headers: { 'Content-Type': 'application/json' } },
  }).then((res) => {
    dispatch(setTeacherSecondary(res.data[0]));
  });

// add work
export const addWork = (work) => ({
  type: 'ADD_WORK',
  work,
});

export const startAddWork = ({ work = '' }) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('token', localStorage.getItem('teacherToken'));
  formdata.append('work', work);
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/addwork',
    data: formdata,
    config: { header: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(addWork(res.data.work));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const editWork = (work) => ({
  type: 'EDIT_WORK',
  work,
});

export const startEditWork = ({ work = '', _id = '' }) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('token', localStorage.getItem('teacherToken'));
  formdata.append('work', work);
  formdata.append('_id', _id);
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/student/updatework',
    data: formdata,
    config: { header: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(editWork(res.data.work));
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
      dispatch(editWork(res.data.work));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
// add technicalSkill
export const addTechnicalSkill = (technicalSkill) => ({
  type: 'ADD_TECHNICALSKILL',
  technicalSkill,
});

export const startAddTechnicalSkill = ({ skill = '' }) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('skill', skill);
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/addtechnicalskill',
    data: formdata,
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(addTechnicalSkill(res.data.technicalSkills));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

export const editTechnicalSkill = (technicalSkill) => ({
  type: 'EDIT_TECHNICALSKILL',
  technicalSkill,
});

export const startEditTechnicalSkill = ({ skill = '', _id = '' }) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('token', localStorage.getItem('teacherToken'));
  formdata.append('skill', skill);
  formdata.append('_id', _id);
  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/updatetechnicalskill',
    data: formdata,
    config: { headers: { 'Content-Type': 'appplication/json' } },
  })
    .then((res) => {
      dispatch(editTechnicalSkill(res.data.technicalSkills));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};
export const startRemoveTechnicalSkill = (_id) => (dispatch) =>
  axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/removetechnicalskill',
    data: {
      token: localStorage.getItem('teacherToken'),
      _id,
    },
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      dispatch(editTechnicalSkill(res.data.technicalSkills));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
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

export const startEditCommitte = ({ committe = '', _id = '' }) => (dispatch) => {
  const formdata = new FormData();
  formdata.append('token', localStorage.getItem('studentToken'));
  format.append('committe', committe);
  format.append('_id', _id);
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
export const updateSpecialisation = (specialisation) => ({
  type: 'UPDATE_SPECIALISATION',
  specialisation,
});

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
      token: localStorage.getItem('studentToken'),
      specialisation,
    },
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(updateSpecialisation(res.data.specialisation));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};

// updateEduction
export const updateEduction = (eduction) => ({
  type: 'UPDATE_EDUCTION',
  eduction,
});

export const startUpdateEduction = ({
  ed1 = '',
  ed2 = '',
  ed3 = '',
  ed4 = '',
  ed5 = '',
}) => (dispatch) => {
  const eductiontemp = [ed1, ed2, ed3, ed4, ed5];
  const eduction = eductiontemp.filter((elem) => elem !== '');

  return axios({
    method: 'patch',
    url: 'http://localhost:3000/s/teacher/updateeduction',
    data: {
      token: localStorage.getItem('teacherToken'),
      eduction,
    },
    config: { headers: { 'Content-Type': 'application/json' } },
  })
    .then((res) => {
      dispatch(updateEduction(res.data.eduction));
      return Promise.resolve();
    })
    .catch((err) => Promise.reject(err));
};
