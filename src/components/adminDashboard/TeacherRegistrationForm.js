import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const TeacherRegistrationForm = ({ isSubmitting, errors }) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    <label htmlFor="email">
      Email:
      <Field type="text" name="email" placeholder="email of the teacher." />
    </label>
    <label htmlFor="password">
      Password:
      <Field type="password" name="password" placeholder="Password" />
    </label>
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </Form>
);

const FormikSpecialisationForm = withFormik({
  mapPropsToValues({ email = '' } = {}) {
    return { email, password: '' };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email is not a valid email.')
      .required('Email is required for registration.'),
    password: Yup.string().required(),
  }),
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    if (props.login) {
      props
        .onSubmit(val)
        .then(() => {
          resetForm();
          setSubmitting(false);
          props.history.push(props.redirect);
          props.setProfile();
        })
        .then(() => props.setSecondary())
        .catch((err) => {
          setErrors({ error: `Something Went Wrong: ${err}` });
          setSubmitting(false);
        });
    } else {
      props
        .onSubmit(val)
        .then(() => {
          resetForm();
          setSubmitting(false);
          props.history.push(props.redirect);
        })
        .catch((err) => {
          setErrors({ error: `Something Went Wrong: ${err}` });
          setSubmitting(false);
        });
    }
  },
})(TeacherRegistrationForm);

export default FormikSpecialisationForm;
