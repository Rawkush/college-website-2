import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const CommitteForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    {errors.error && <p>{errors.error} </p>}
    <label htmlFor="name">
      Committe Name:
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field type="text" name="name" placeholder="enter the committe name" />
    </label>
    <label htmlFor="designation">
      Designation:
      {touched.designation && errors.designation && <p>{errors.designation}</p>}
      <Field
        type="text"
        name="designation"
        placeholder="enter the designation"
      />
    </label>
    <label htmlFor="status">
      Status:
      {touched.status && errors.status && <p>{errors.status}</p>}
      <Field type="text" name="status" placeholder="enter the status" />
    </label>
    {values.edit && (
      <button
        type="button"
        onClick={() => {
          values
            .remove(values._id)
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
  mapPropsToValues({
    _id = '',
    edit = '',
    name = '',
    status = '',
    designation = '',
    remove = '',
    history = '',
  } = {}) {
    return {
      name,
      designation,
      status,
      remove,
      history,
      _id,
      edit,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Oops! Seems like you forgot the name.'),
    designation: Yup.string().required('Designation is required.'),
    status: Yup.string().required('Status is required.'),
  }),
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    props
      .onSubmit(val)
      .then(() => {
        resetForm();
        setSubmitting(false);
        props.history.push('/teacher/myprofile');
      })
      .catch(() => {
        setErrors({ error: 'Something Went Wrong.' });
        setSubmitting(false);
      });
  },
})(CommitteForm);
export default FormikCommitteForm;
