import React from 'react';
import jwt from 'jsonwebtoken';

import FormikStudentRegistrationForm from './../../components/registration/studentRegistrationForm';

const StudentRegistrationPage = () => {
  function getCookieValue(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  const token = getCookieValue('token');
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  const data = jwt.decode(token);

  return (
    <div>
      <FormikStudentRegistrationForm {...data.userData} token={data.token} />
    </div>
  );
};

export default StudentRegistrationPage;
