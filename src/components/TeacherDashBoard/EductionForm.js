import React from 'react';
import { withFormik, Form, Field } from 'formik';

const EducationForm = ({ isSubmitting, errors }) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    <label htmlFor="title">
      Education:
      <Field type="text" name="e1" placeholder="any" />
      <Field type="text" name="e2" placeholder="any" />
      <Field type="text" name="e3" placeholder="any" />
      <Field type="text" name="e4" placeholder="any" />
      <Field type="text" name="e5" placeholder="any" />
    </label>
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </Form>
);

const FormikEducationForm = withFormik({
  mapPropsToValues({ education }) {
    const [e1, e2, e3, e4, e5] = education;
    return {
      e1: e1 || '',
      e2: e2 || '',
      e3: e3 || '',
      e4: e4 || '',
      e5: e5 || '',
    };
  },
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    props
      .onSubmit(val)
      .then(() => {
        resetForm();
        setSubmitting(false);
        props.history.push('/teacher/myprofile');
      })
      .catch(() => {
        setErrors({ error: 'Something Went Wrong!' });
        setSubmitting(false);
      });
  },
})(EducationForm);

export default FormikEducationForm;
