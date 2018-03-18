import React from 'react';
import { withFormik, Field } from 'formik';
import Yup from 'yup';

import { StyledForm, FormError } from 'theme/Components';

const StyledFormMod = StyledForm.extend`
  > input {
    width: 99%;
    margin: 10px 0px;
  }
`;

const SkillForm = ({ errors, touched, isSubmitting }) => (
  <StyledFormMod>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="skill">Skill:</label>
    {touched.skill && errors.skill && <FormError>{errors.skill}</FormError>}
    <Field
      autoFocus
      type="text"
      name="ts1"
      id="skill"
      placeholder="Enter ur skill:database Managment"
    />
    <Field type="text" name="ts2" id="skill" placeholder="Enter ur skill:" />
    <Field type="text" name="ts3" id="skill" placeholder="Enter ur skill" />
    <Field type="text" name="ts4" id="skill" placeholder="Enter ur skill" />
    <Field type="text" name="ts5" id="skill" placeholder="Enter ur skill" />
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </StyledFormMod>
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
