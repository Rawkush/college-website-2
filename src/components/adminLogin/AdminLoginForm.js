import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const AdminLoginForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    <label htmlFor="username">
      Username:
      {touched.username && errors.username && <p>{errors.username}</p>}
      <Field
        type="text"
        name="username"
        placeholder="Enter the username name here..."
        autoFocus
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

export default FormikAdminLoginForm;
