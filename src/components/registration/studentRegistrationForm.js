import React from 'react';
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
    {values.edit && (
      <div>
        <p>Links:</p>
        <div>
          <label htmlFor="provider">
            Name:
            <Field
              type="text"
              name="profile0"
              placeholder="eg. Google, LinkedIn, Portfolio"
            />
          </label>
          <label htmlFor="url">
            Url:
            <Field
              type="text"
              name="url0"
              placeholder="www.example.com/myprofile"
            />
          </label>
        </div>
        <div>
          <label htmlFor="provider">
            Name:
            <Field
              type="text"
              name="profile1"
              placeholder="eg. Google, LinkedIn, Portfolio"
            />
          </label>
          <label htmlFor="url">
            Url:
            <Field
              type="text"
              name="url1"
              placeholder="www.example.com/myprofile"
            />
          </label>
        </div>

        <div>
          <label htmlFor="provider">
            Name:
            <Field
              type="text"
              name="profile2"
              placeholder="eg. Google, LinkedIn, Portfolio"
            />
          </label>
          <label htmlFor="url">
            Url:
            <Field
              type="text"
              name="url2"
              placeholder="www.example.com/myprofile"
            />
          </label>
        </div>

        <div>
          <label htmlFor="provider">
            Name:
            <Field
              type="text"
              name="profile3"
              placeholder="eg. Google, LinkedIn, Portfolio"
            />
          </label>
          <label htmlFor="url">
            Url:
            <Field
              type="text"
              name="url3"
              placeholder="www.example.com/myprofile"
            />
          </label>
        </div>

        <div>
          <label htmlFor="provider">
            Name:
            <Field
              type="text"
              name="profile4"
              placeholder="eg. Google, LinkedIn, Portfolio"
            />
          </label>
          <label htmlFor="url">
            Url:
            <Field
              type="text"
              name="url4"
              placeholder="www.example.com/myprofile"
            />
          </label>
        </div>
      </div>
    )}
    <button disabled={!!isSubmitting}> Submit </button>
  </Form>
);

const FormikStudentRegistration = withFormik({
  mapPropsToValues({
    edit,
    name,
    rollNo,
    email,
    location,
    dateOfBirth,
    gender,
    bio,
    branch,
    admittedIn,
    linkedProfiles,
  }) {
    const profile0 = linkedProfiles[0] ? linkedProfiles[0].provider : '';
    const url0 = linkedProfiles[0] ? linkedProfiles[0].url : '';
    const profile1 = linkedProfiles[1] ? linkedProfiles[1].provider : '';
    const url1 = linkedProfiles[1] ? linkedProfiles[1].url : '';
    const profile2 = linkedProfiles[2] ? linkedProfiles[2].provider : '';
    const url2 = linkedProfiles[2] ? linkedProfiles[2].url : '';
    const profile3 = linkedProfiles[3] ? linkedProfiles[3].provider : '';
    const url3 = linkedProfiles[3] ? linkedProfiles[3].url : '';
    const profile4 = linkedProfiles[4] ? linkedProfiles[4].provider : '';
    const url4 = linkedProfiles[4] ? linkedProfiles[4].url : '';

    return {
      name: name || '',
      rollNo: rollNo || '',
      email: email || '',
      location: location || '',
      dateOfBirth: dateOfBirth ? moment(dateOfBirth).format('YYYY-MM-DD') : '',
      gender: gender || '',
      bio: bio || '',
      branch: branch || '',
      admittedIn: admittedIn ? moment(admittedIn).format('YYYY-MM') : '',
      edit: edit || '',
      profile0,
      url0,
      profile1,
      url1,
      profile2,
      url2,
      profile3,
      url3,
      profile4,
      url4,
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
    props
      .onSubmit(data)
      .then(() => {
        setSubmitting(false);
        props.history.push('/student/myprofile');
      })
      .catch((err) => {
        setErrors({ error: `Something Went wrong ${err}` });
        setSubmitting(false);
      });
  },
})(StudentRegistration);

export default FormikStudentRegistration;
