import React from 'react';

import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const StudentRegistration = ({ values, errors, touched, isSubmitting }) => (
  <Form>
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
      <Field type="textarea" name="bio" placeholder="Enter your Bio" />
    </label>
    <button disabled={!!isSubmitting}> Submit </button>
  </Form>
);

const FormikStudentRegistration = withFormik({
  mapPropsToValues({ email, location, dateOfBirth, gender, bio }) {
    return {
      email: email || '',
      location: location || '',
      dateOfBirth: dateOfBirth || '',
      gender: gender || '',
      bio: bio || '',
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
  handleSubmit(val, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      console.log(val);
      setSubmitting(false);
    }, 2000);
  },
})(StudentRegistration);

export default FormikStudentRegistration;
