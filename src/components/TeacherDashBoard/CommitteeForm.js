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
const Container = styled.div`
  width: 60%;
  max-width: 1170px;
  margin: 0 auto;
  text-align: center;
`;


const CommitteForm = ({ values, errors, touched, isSubmitting }) => (
  <Container>
  <StyledForms>
    {errors.error && <FormError>{errors.error} </FormError>}
    <label htmlFor="name">
      <Label> Committe Name: </Label>
    </label>
    {touched.name && errors.name && <FormError>{errors.name}</FormError>}
    <Field
      type="text"
      id="Name"
      name="name"
      placeholder="enter the committe name"
    />
    <label htmlFor="designation">
      <Label> Designation: </Label>
    </label>
    {touched.designation &&
      errors.designation && <FormError>{errors.designation}</FormError>}
    <Field
      type="text"
      id="designation"
      name="designation"
      placeholder="enter the designation"
    />
    <label htmlFor="status">
      <Label> Status: </Label>
    </label>
    {touched.status && errors.status && <FormError>{errors.status}</FormError>}
    <Field
      type="text"
      id="status"
      name="status"
      placeholder="enter the status"
    />
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
  </StyledForms>
  </Container>
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
