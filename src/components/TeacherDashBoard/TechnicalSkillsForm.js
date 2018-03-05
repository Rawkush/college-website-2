import React from 'react';
import { withFormik, Field } from 'formik';
import Yup from 'yup';
import media from 'theme/media';

import { StyledForm, FormError, H2 } from 'theme/Components';

import styled from 'styled-components';

const Label = styled.span`
  font-family: 'Alegreya Sans', serif;
  font-size: 1.3rem;
  font-weight: 800;
`;

const Container = styled.div`
  width: 60%;
  max-width: 1170px;
  margin: 0 auto;
  text-align: center;
`;

const H3 = H2.extend`
  font-size: 1.3;
  text-align: center;
  padding: 15px;
`;

const StyledForms = StyledForm.extend`  
> input {
  margin: 5px;
  width: 100%;
}
> label {
  text-align: left;
}
> button {
 display: flex;
 ${
   media.phone`
   display: inline-block;
   margin: 0 auto;
   margin-top: 15px;
   `
 }
 }
`

const SkillForm = ({ errors, touched, isSubmitting }) => (
  <Container>
  <StyledForms>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="skill">
      <Label> Skill: </Label>
    </label>
    {touched.skill && errors.skill && <FormError>{errors.skill}</FormError>}
    <Field type="text" name="ts1" id="skill" placeholder="Enter ur skills" />
    <Field type="text" name="ts2" id="skill" placeholder="Enter ur skills" />
    <Field type="text" name="ts3" id="skill" placeholder="Enter ur skills" />
    <Field type="text" name="ts4" id="skill" placeholder="Enter ur skills" />
    <Field type="text" name="ts5" id="skill" placeholder="Enter ur skills" />
    <br />
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </StyledForms>
  </Container>
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
