import React from 'react';
import moment from 'moment';

import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const TeacherRegistration = ({ values, errors, touched, isSubmitting }) => (
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

    {values.edit && (
      <label htmlFor="currentPosition">
        Current Position:
        {touched.currentPosition &&
          errors.currentPosition && <p>{errors.currentPosition}</p>}
        <Field
          type="text"
          name="currentPosition"
          placeholder="currentPosition"
        />
      </label>
    )}
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
    <label htmlFor="confirmPassword">
      Confirm Password:
      {touched.confirmPassword &&
        errors.confirmPassword && <p>{errors.confirmPassword} </p>}
      <Field
        type="confirmPassword"
        name="confirmPassword"
        placeholder="Confirm your password."
      />
    </label>
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </Form>
);

const FormikTeacherRegistration = withFormik({
  mapPropsToValues({
    name,
    email,
    dateOfBirth,
    gender,
    currentPosition,
    edit,
  } = {}) {
    return {
      name: name || '',
      email: email || '',
      dateOfBirth: dateOfBirth ? moment(dateOfBirth).format('YYYY-MM-DD') : '',
      gender: gender || '',
      currentPosition: currentPosition || '',
      password: '',
      confirmPassword: '',
      edit: edit || '',
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required for registration'),
    email: Yup.string()
      .email('Email is not a valid email.')
      .required('Email is required for registration.'),
    dateOfBirth: Yup.date(),
    currentPosition: Yup.string().required('currentPosition musted be entered'),
  }),
  handleSubmit(val, { props, setErrors, setSubmitting }) {
    if (val.password) {
      if (val.password !== val.confirmPassword) {
        setErrors({ confirmPassword: 'Passwords do not match.' });
        setSubmitting(false);
      } else {
        props
          .onSubmit(val)
          .then(() => {
            setSubmitting(false);
            props.history.push('/teacher/myprofile');
          })
          .catch((err) => {
            setErrors({ error: `Something Went wrong ${err}` });
            setSubmitting(false);
          });
      }
    } else {
      props
        .onSubmit(val)
        .then(() => {
          setSubmitting(false);
          props.history.push('/teacher/myprofile');
        })
        .catch((err) => {
          setErrors({ error: `Something Went wrong ${err}` });
          setSubmitting(false);
        });
    }
  },
})(TeacherRegistration);

export default FormikTeacherRegistration;
