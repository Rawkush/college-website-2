import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const StudentRegistration = ({
  values,
  errors,
  touched,
  isSubmitting,
  handleBlur,
  handleChange,
}) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    <label htmlFor="name">
      Name:
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field type="text" name="name" placeholder="Enter your name here..." />
    </label>
    <label htmlFor="rollNo">
      Roll Number:
      {touched.rollNo && errors.rollNo && <p>{errors.rollNo}</p>}
      <Field type="text" name="rollNo" placeholder="Roll Number" />
    </label>
    <label htmlFor="location">
      Location:
      {touched.location && errors.location && <p>{errors.location}</p>}
      <Field type="text" name="location" placeholder="Location" />
    </label>
    <label htmlFor="dateOfBirth">
      Date of Birth:
      {touched.dateOfBirth && errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
      <Field type="date" name="dateOfBirth" placeholder="Date of Birth" />
    </label>
    <label htmlFor="admittedIn">
      Admitted in:
      {touched.admittedIn && errors.admittedIn && <p>{errors.admittedIn}</p>}
      <input
        type="month"
        name="admittedIn"
        id="admittedIn"
        value={values.admittedIn}
        onChange={handleChange}
        onBlur={handleBlur}
        min={moment()
          .subtract(4, 'years')
          .format('YYYY-MM-DD')}
        max={moment().format('YYYY-MM-DD')}
      />
    </label>
    <label htmlFor="branch ">
      Branch :
      {touched.branch && errors.branch && <p>{errors.branch}</p>}
      <select
        name="branch"
        id="branch"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.branch}
      >
        <option value="" disabled>
          Select the in which you are admitted.
        </option>
        <option value="it">I.T.</option>
        <option value="civil">Civil</option>
        <option value="env">Environment</option>
      </select>
    </label>
    <label htmlFor="gender">
      Gender:
      {touched.gender && errors.gender && <p>{errors.gender}</p>}
      <Field type="text" name="gender" placeholder="Gender" />
    </label>
    <label htmlFor="email">
      Email:
      {touched.email && errors.email && <p>{errors.email}</p>}
      <Field type="email" name="email" placeholder="Email" />
    </label>
    <label htmlFor="bio">
      Bio:
      {touched.bio && errors.bio && <p>{errors.bio}</p>}
      <Field type="text" name="bio" placeholder="Enter your Bio" />
    </label>
    <button disabled={!!isSubmitting}> Submit </button>
  </Form>
);

const FormikStudentRegistration = withFormik({
  mapPropsToValues({
    name,
    rollNo,
    email,
    location,
    dateOfBirth,
    gender,
    bio,
  }) {
    return {
      name: name || '',
      rollNo: rollNo || '',
      email: email || '',
      location: location || '',
      dateOfBirth: dateOfBirth ? moment(dateOfBirth).format('YYYY-MM-DD') : '',
      gender: gender || '',
      bio: bio || '',
      branch: '',
      admittedIn: '',
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required for registration'),
    email: Yup.string()
      .email('Email is not a valid email.')
      .required('Email is required for registration.'),
    rollNo: Yup.number('Roll number should be a number.')
      .positive('Roll number cannot be a negative number')
      .required('Roll number is required for registration'),
    location: Yup.string(),
    dateOfBirth: Yup.date(),
  }),
  handleSubmit(val, { props, setErrors, setSubmitting }) {
    const data = {
      ...props,
      ...val,
    };
    axios({
      method: 'post',
      url: 'http://localhost:3000/s/student/registeration',
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setSubmitting(false);
        localStorage.setItem('studentToken', res.data.token);
        return <Redirect to="\login" />;
      })
      .catch((err) => {
        setErrors({ error: `Something went wrong: ${err}` });
        setSubmitting(false);
      });
  },
})(StudentRegistration);

export default FormikStudentRegistration;
