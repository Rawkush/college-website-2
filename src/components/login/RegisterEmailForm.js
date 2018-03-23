import React from 'react';
import { StyledForm, FormError } from 'theme/Components';
import { Field, withFormik } from 'formik';
import Yup from 'yup';

const TeacherRegistration = ({ errors, isSubmitting }) => (
  <StyledForm>
    {errors.error && <FormError>{errors.error}</FormError>}
    <Field type="email" name="email" placeholder="Enter your email here..." />
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </StyledForm>
);

const FormikTeacherRegistration = withFormik({
  mapPropsToValues() {
    return { email: '' };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Email is not a valid email.')
      .required('Email is required for registration.'),
  }),
  handleSubmit(val, { props, setErrors, setSubmitting }) {
    props
      .onSubmit(val)
      .then(() => {
        setSubmitting(false);
      })
      .catch(({ data }) => {
        setErrors({ error: data });
        setSubmitting(false);
      });
  },
})(TeacherRegistration);

export default FormikTeacherRegistration;
