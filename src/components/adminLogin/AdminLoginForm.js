import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

import { history } from './../../routers/AppRouter';

const AdminLoginForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    {errors.auth && <p>{errors.auth}</p>}
    <label htmlFor="username">
      Username:
      {touched.username && errors.username && <p>{errors.username}</p>}
      <Field
        type="text"
        name="username"
        placeholder="Enter the username name here..."
      />
    </label>
    <label htmlFor="password">
      Password:
      {touched.password && errors.password && <p>{errors.password}</p>}
      <Field type="password" name="password" placeholder="password" />
    </label>
    <button disabled={!!isSubmitting}> Login </button>
  </Form>
);

const FormikAdminLoginForm = withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: '',
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required.'),
    password: Yup.string().required('Password is required.'),
  }),
  handleSubmit(val, { resetForm, setErrors, setSubmitting }) {
    axios
      .post('http://localhost:3000/s/admin/login', {
        username: val.username,
        password: val.password,
      })
      .then((res) => {
        localStorage.setItem('adminToken', res.data.token);
        setSubmitting(false);
        history.push('/admin/dashboard');
      })
      .catch((err) => {
        resetForm();
        setErrors({ auth: 'Entered Credentials are wrong. Try again.' });
        setSubmitting(false);
      });
  },
})(AdminLoginForm);

export default FormikAdminLoginForm;
