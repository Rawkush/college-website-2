import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const WorkForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    {errors.error && <p>{errors.error}</p>} 
    <label htmlFor="work">
      Skill:
      {touched.work && errors.work && <p>{errors.work}</p>}
      <Field type="text" name="work" placeholder="Enter ur works" />
      <Field type="text" name="work" placeholder="Enter ur works" />
      <Field type="text" name="work" placeholder="Enter ur works" />
      <Field type="text" name="work" placeholder="Enter ur works" />
      <Field type="text" name="work" placeholder="Enter ur works" />
    </label>
    {values.edit && (
      <button
        type="button"
        onClick={() => {
          values
            .removeSkill(values._id)
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
    work = '',
    history = '',
    _id = '',
    edit = '',
    removeSkill = '',
  }) {
    return {
      work,
      removeSkill,
      history,
      _id,
      edit,
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
