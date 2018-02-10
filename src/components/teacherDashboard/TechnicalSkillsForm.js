import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const SkillForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    <label htmlFor="skill">
      Skill:
      {touched.skill && errors.skill && <p>{errors.skill}</p>}
      <Field type="text" name="skill" placeholder="Enter ur skills" />
      <Field type="text" name="skill" placeholder="Enter ur skills" />
      <Field type="text" name="skill" placeholder="Enter ur skills" />
      <Field type="text" name="skill" placeholder="Enter ur skills" />
      <Field type="text" name="skill" placeholder="Enter ur skills" />
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

const FormikSkillForm = withFormik({
  mapPropsToValues({
    skill = '',
    history = '',
    _id = '',
    edit = '',
    removeSkill = '',
  }) {
    return {
      skill,
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
})(SkillForm);

export default FormikSkillForm;
