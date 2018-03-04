import React from 'react';
import { withFormik, Form, Field } from 'formik';

import { StyledForm, FormError, H2 } from 'theme/Components';

import styled from 'styled-components';

const Label = styled.span`
font-family: 'Alegreya Sans', serif;
  font-size: 1.3rem;
  font-weight: 800;
`;


const StyledForms = StyledForm.extend` 
> input {
  margin: 5px;
  width: 70%;
}
`
const Container = styled.div`
  width: 60%;
  max-width: 1170px;
  margin: 0 auto;
 
`;

const EducationForm = ({ isSubmitting, errors }) => (
  <Container>
  <StyledForms>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="title">
    <Label>  Education: </Label>
      </label>
      <Field type="text" id="title" name="e1" placeholder="any" />
      <Field type="text" id="title" name="e2" placeholder="any" />
      <Field type="text" id="title" name="e3" placeholder="any" />
      <Field type="text" id="title" name="e4" placeholder="any" />
      <Field type="text" id="title" name="e5" placeholder="any" /> <br />
    
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </StyledForms>
  </Container>
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
