import React from 'react';
import { withFormik, Field } from 'formik';
import { StyledForm, FormError } from 'theme/Components';
import Yup from 'yup';
import Toaster from './../Toaster/InfoToaster';

const AdminLoginForm = ({ errors, touched, isSubmitting }) => (
  <StyledForm>
    <label htmlFor="username">Username: </label>
    {touched.username &&
      errors.username && <FormError>{errors.username}</FormError>}
    <Field
      type="text"
      name="username"
      placeholder="Enter the username name here..."
      autoFocus
      id="username"
      required
    />

    <label htmlFor="password">Password: </label>
    {touched.password &&
      errors.password && <FormError>{errors.password}</FormError>}
    <Field
      type="password"
      name="password"
      placeholder="password"
      id="password"
      required
    />

    <button disabled={!!isSubmitting}> Login </button>
    {errors.error && <Toaster message={errors.error} theme="danger" />}
  </StyledForm>
);

export default withFormik({
  mapPropsToValues({ username = '', password = '' } = {}) {
    return {
      username,
      password,
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required.'),
    password: Yup.string().required('Password is required.'),
  }),
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    props
      .startLogin(val)
      .then(() => {
        setSubmitting(false);
        props.history.push('/admin/dashboard');
      })
      .catch(() => {
        resetForm();
        setErrors({ error: 'Credential were wrong or the server is down' });
        setSubmitting(false);
      });
  },
})(AdminLoginForm);
