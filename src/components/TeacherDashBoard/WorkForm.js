import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import styled from 'styled-components';

import { StyledForm, FormError, H2 } from './../../theme/Components';

const Label = styled.span`
font-family: 'Alegreya Sans', serif;
  font-size: 1.3rem;
  font-weight: 800;
`;
const Container = styled.div`
  width: 60%;
  max-width: 1170px;
  margin: 0 auto;
 
`;

const H3 = H2.extend` 
font-size: 1.3;
text-align: center;
padding: 15px;
`

const WorkForm = ({ values, errors, touched, isSubmitting }) => (
  <Container>
  <StyledForm>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="title">
     <Label> Title: </Label>
      </label>
      {touched.title && errors.title && <FormError>{errors.tilte}</FormError>}
      <Field type="text" id="title" name="title" placeholder="Enter what is your work." />
    
    <label htmlFor="description">
    <Label> Description </Label>
      </label>
      {touched.description && errors.description && <FormError>{errors.description}</FormError>}
      <Field type="text" id="description" name="description" placeholder="Describe your work." />
   
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
  </StyledForm>
  </Container>
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
