import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const CommitteForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    {errors.error && <p>{errors.error} </p>}
    <label htmlFor="committe">
      Committe:
      {touched.committe && errors.committe && <p>{errors.committe}</p>}
      <Field type="text" name="committe" placeholder="enter the committe" />
      <Field type="text" name="committe" placeholder="enter the committe" />
      <Field type="text" name="committe" placeholder="enter the committe" />
      <Field type="text" name="committe" placeholder="enter the committe" />
      <Field type="text" name="committe" placeholder="enter the committe" />
    </label>
    {values.edit && (
      <button
        type="button"
        onClick={() => {
          values
            .removeCommitte(values._id)
            .then(() => values.history.push('/teacher/myprofile'));
        }}
      >
        Remove
      </button>
    )}
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </Form>
);

const FormikCommitteForm = withFormik({
  mapPropsToValues({ _id = '', edit = '', removeCommitte = '', history = '' }) {
    return {
      removeCommitte,
      history,
      _id,
      edit,
    };
  },
  validationSchema: Yup.object().shape({
    committe: Yup.string().required('Oops! Seems like you forgot the title.'),
  }),
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    setSubmitting(false);
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
})(CommitteForm);
export default FormikCommitteForm;
