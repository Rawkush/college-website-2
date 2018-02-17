import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const WorkForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    <label htmlFor="title">
      Title:
      {touched.title && errors.title && <p>{errors.tilte}</p>}
      <Field type="text" name="title" placeholder="Enter what is your work." />
    </label>
    <label htmlFor="description">
      Title:
      {touched.description && errors.description && <p>{errors.description}</p>}
      <Field type="text" name="description" placeholder="Describe your work." />
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

const FormikWorkForm = withFormik({
  mapPropsToValues({
    title = '',
    description = '',
    _id = '',
    edit = '',
    remove = '',
    history = '',
  } = {}) {
    return {
      title,
      description,
      _id,
      edit,
      remove,
      history,
    };
  },
  validationSchema: Yup.object().shape({
    skill: Yup.string('insert alphabet only'),
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
        setErrors({ error: 'Something Went Wrong!' });
        setSubmitting(false);
      });
  },
})(WorkForm);

export default FormikWorkForm;
