import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
  startStudentLogin,
  startSetStudent,
} from './../../actions/studentPrimary';
import { startSetStudentSecondary } from './../../actions/studentSecondary';

const StudentRegistrationPage = ({
  login,
  setProfile,
  setSecondary,
  history,
}) => {
  function getCookieValue(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i];
      // eslint-disable-next-line
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      // eslint-disable-next-line
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  const token = getCookieValue('token');
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  if (token) {
    login(token)
      .then(() => setProfile())
      .then(() => setSecondary())
      .then(() => history.push('/student/myprofile'))
      .catch(() => {
        history.push('/');
      });
  } else {
    history.push('/');
  }

  return (
    <div>
      <p>Please Wait...</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  login: (t) => dispatch(startStudentLogin(t)),
  setProfile: () => dispatch(startSetStudent()),
  setSecondary: () => dispatch(startSetStudentSecondary()),
});

export default connect(undefined, mapDispatchToProps)(StudentRegistrationPage);
