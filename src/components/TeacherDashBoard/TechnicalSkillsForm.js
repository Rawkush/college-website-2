import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const SkillForm = ({ errors, touched, isSubmitting }) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    <label htmlFor="skill">
      Skill:
      {touched.skill && errors.skill && <p>{errors.skill}</p>}
      <Field type="text" name="ts1" placeholder="Enter ur skills" />
      <Field type="text" name="ts2" placeholder="Enter ur skills" />
      <Field type="text" name="ts3" placeholder="Enter ur skills" />
      <Field type="text" name="ts4" placeholder="Enter ur skills" />
      <Field type="text" name="ts5" placeholder="Enter ur skills" />
    </label>
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </Form>
);

const FormikSkillForm = withFormik({
  mapPropsToValues({ technicalSkills = [] } = {}) {
    const [ts1, ts2, ts3, ts4, ts5] = technicalSkills;
    return {
      ts1: ts1 || '',
      ts2: ts2 || '',
      ts3: ts3 || '',
      ts4: ts4 || '',
      ts5: ts5 || '',
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
