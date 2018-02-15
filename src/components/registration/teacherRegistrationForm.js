import React from 'react';
import moment from 'moment';

import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const TeacherRegistration = ({ errors, touched, isSubmitting }) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    <label htmlFor="name">
      Name:
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field type="text" name="name" placeholder="Enter your name here..." />
    </label>
    <label htmlFor="dateOfBirth">
      Date of Birth:
      {touched.dateOfBirth && errors.dateOfBirth && <p>{errors.dateOfBirth}</p>}
      <Field type="date" name="dateOfBirth" placeholder="Date of Birth" />
    </label>

    <label htmlFor="currentPosition">
      Current Position:
      {touched.currentPosition &&
        errors.currentPosition && <p>{errors.currentPosition}</p>}
      <Field type="text" name="currentPosition" placeholder="currentPosition" />
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
    <label htmlFor="password">
      Password:
      {touched.Password && errors.password && <p>{errors.password} </p>}
      <Field type="password" name="password" placeholder="Password" />
    </label>
    <button disabled={!!isSubmitting}> Submit </button>
  </Form>
);

const FormikTeacherRegistration = withFormik({
  mapPropsToValues({
    name,
    email,
    dateOfBirth,
    gender,
    currentPosition,
    password,
  }) {
    return {
      name: name || '',
      email: email || '',
      dateOfBirth: dateOfBirth ? moment(dateOfBirth).format('YYYY-MM-DD') : '',
      gender: gender || '',
      currentPosition: currentPosition || '',
      password: password || '',
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required for registration'),
    email: Yup.string()
      .email('Email is not a valid email.')
      .required('Email is required for registration.'),
    dateOfBirth: Yup.date(),
    currentPosition: Yup.string().required('currentPosition musted be entered'),
    password: Yup.string().required(),
  }),
  handleSubmit(val, { props, setErrors, setSubmitting }) {
    const data = {
      ...props,
      ...val,
    };
    props
      .onSubmit(data)
      .then(() => {
        setSubmitting(false);
        props.history.push('/teacher/myprofile');
      })
      .catch((err) => {
        setErrors({ error: `Something Went wrong ${err}` });
        setSubmitting(false);
      });
  },
})(TeacherRegistration);

export default FormikTeacherRegistration;
