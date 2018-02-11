import React from 'react';
import { withFormik, Form, Field } from 'formik';

const EductionForm = ({ isSubmitting, errors }) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    <label htmlFor="title">
      Eduction:
      <Field type="text" name="sp1" placeholder="any" />
      <Field type="text" name="sp2" placeholder="any" />
      <Field type="text" name="sp3" placeholder="any" />
      <Field type="text" name="sp4" placeholder="any" />
      <Field type="text" name="sp5" placeholder="any" />
    </label>
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </Form>
);

const FormikEductionForm = withFormik({
  mapPropsToValues({ specialisation }) {
    const [sp1, sp2, sp3, sp4, sp5] = specialisation;
    return {
      sp1: sp1 || '',
      sp2: sp2 || '',
      sp3: sp3 || '',
      sp4: sp4 || '',
      sp5: sp5 || '',
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
})(EductionForm);

export default FormikEductionForm;
