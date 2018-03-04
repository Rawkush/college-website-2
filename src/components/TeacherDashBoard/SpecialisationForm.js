import React from 'react';
import { withFormik, Field } from 'formik';
import { StyledForm, FormError, H2, media } from 'theme/Components';

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
`;

const Container = styled.div`
  width: 60%;
  max-width: 1170px;
  margin: 0 auto;
 
`;

const SpecialisationForm = ({ isSubmitting, errors }) => (
  <Container>
  <StyledForms>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="title">
      <Label> Specialisations: </Label>
    </label>
    <Field type="text" id="title" name="sp1" placeholder="any" />
    <Field type="text" id="title" name="sp2" placeholder="any" />
    <Field type="text" id="title" name="sp3" placeholder="any" />
    <Field type="text" id="title" name="sp4" placeholder="any" />
    <Field type="text" id="title" name="sp5" placeholder="any" /> <br />
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </StyledForms>
  </Container>
);

const FormikSpecialisationForm = withFormik({
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
})(SpecialisationForm);

export default FormikSpecialisationForm;
