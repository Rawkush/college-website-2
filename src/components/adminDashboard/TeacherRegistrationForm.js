import React from 'react';
import { withFormik, Field } from 'formik';
import Yup from 'yup';
import { StyledForm, FormError } from 'theme/Components';

const TeacherRegistrationForm = ({ isSubmitting, errors, touched }) => (
  <StyledForm>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="email">Email:</label>
    {touched.email && errors.email && <FormError>{errors.email}</FormError>}
    <Field
      type="text"
      name="email"
      placeholder="Email of the teacher."
      id="email"
    />
    <label htmlFor="password">Password:</label>
    {touched.password &&
      errors.password && <FormError>{errors.password}</FormError>}
    <Field
      type="password"
      name="password"
      placeholder="Password"
      id="password"
    />
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </StyledForm>
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
