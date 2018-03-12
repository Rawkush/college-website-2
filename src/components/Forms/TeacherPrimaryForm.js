import React from 'react';
import moment from 'moment';
import { withFormik, Field } from 'formik';
import Yup from 'yup';
import { StyledForm, FormError } from 'theme/Components';

//  Components
import Image from './../TeacherDashBoard/Photo';

const StyledForms = StyledForm.extend`
  > input {
    margin: 5px;
    width: 100%;
  }
  > label {
    text-align: left;
  }
`;

const TeacherRegistration = ({
  values,
  errors,
  touched,
  isSubmitting,
  setFieldValue,
  handleChange,
  handleBlur,
}) => (
  <StyledForms>
    {values.photo && <Image photo={values.photo} />}
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="photo">Photo:</label>
    {touched.photo && errors.photo && <FormError>{errors.photo}</FormError>}
    <input
      type="file"
      id="photo"
      name="photo"
      onChange={(e) => {
        setFieldValue('photo', e.currentTarget.files[0]);
      }}
    />
    <label htmlFor="name">Name:</label>
    {touched.name && errors.name && <FormError>{errors.name}</FormError>}
    <Field
      type="text"
      id="name"
      name="name"
      placeholder="Enter your name here..."
    />
    <label htmlFor="dateOfBirth">Date of Birth:</label>
    {touched.dateOfBirth &&
      errors.dateOfBirth && <FormError>{errors.dateOfBirth}</FormError>}
    <Field
      type="date"
      id="dateOfBirth"
      name="dateOfBirth"
      placeholder="Date of Birth"
    />
    <label htmlFor="gender">Gender:</label>
    {touched.gender && errors.gender && <FormError>{errors.gender}</FormError>}
    <select
      name="gender"
      id="gender"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.gender}
    >
      <option disabled> Select Your Gender</option>
      <option value="male"> Male </option>
      <option value="female"> Female </option>
      <option value="others"> Others </option>
    </select>
    {values.edit && (
      <StyledForm>
        <label htmlFor="currentPosition">Current Position:</label>
        {touched.currentPosition &&
          errors.currentPosition && <p>{errors.currentPosition}</p>}
        <Field
          type="text"
          name="currentPosition"
          placeholder="currentPosition"
        />
      </StyledForm>
    )}
    <label htmlFor="email">Email:</label>
    {touched.email && errors.email && <FormError>{errors.email}</FormError>}
    <Field type="email" name="email" placeholder="Email" />

    <label htmlFor="password">Password:</label>
    {touched.Password &&
      errors.password && <FormError>{errors.password} </FormError>}
    <Field type="password" name="password" placeholder="Password" />
    <label htmlFor="confirmPassword">Confirm Password:</label>
    {touched.confirmPassword &&
      errors.confirmPassword && (
        <FormError>{errors.confirmPassword} </FormError>
      )}
    <Field
      type="password"
      name="confirmPassword"
      placeholder="Confirm your password."
    />
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </StyledForms>
);

const FormikTeacherRegistration = withFormik({
  mapPropsToValues({
    name = '',
    email = '',
    photo = '',
    dateOfBirth = '',
    gender = '',
    currentPosition = '',
    edit = '',
  } = {}) {
    return {
      name,
      email,
      photo,
      dateOfBirth: dateOfBirth ? moment(dateOfBirth).format('YYYY-MM-DD') : '',
      gender,
      currentPosition,
      password: '',
      confirmPassword: '',
      edit,
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
