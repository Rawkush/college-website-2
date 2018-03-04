import React from 'react';
import moment from 'moment';
import { StyledForm, FormError,Container, H2 } from 'theme/Components';

import { withFormik, Form, Field } from 'formik';
import Yup from 'yup'; 
import styled from 'styled-components';


const Label = styled.span`
font-family: 'Alegreya Sans', serif;
  font-size: 1.3rem;
  font-weight: 800;
`;

const H3 = H2.extend`
font-size: 1.3;
text-align: center;
padding: 15px;
`

// const labels = StyledForm.extend`
// > input {
// width: 50%;
// }
// `

const TeacherRegistration = ({ values, errors, touched, isSubmitting }) => (
  <Container>
    <H3> Edit Primary  </H3>
  <StyledForm>
    
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="name">
     <Label> Name: </Label>
      </label>
      {touched.name && errors.name && <FormError>{errors.name}</FormError>}
      <Field type="text"  id="name" name="name" placeholder="Enter your name here..." />
    
    <label htmlFor="dateOfBirth">
      <Label>Date of Birth: </Label>
      </label>
      {touched.dateOfBirth && errors.dateOfBirth && <FormError>{errors.dateOfBirth}</FormError>}
      <Field type="date" id="dateOfBirth" name="dateOfBirth" placeholder="Date of Birth" />
      <label htmlFor="gender">
      <Label>Gender: </Label>
      </label>
      {touched.gender && errors.gender && <FormError>{errors.gender}</FormError>}
     <select name="gender" >
       <option value="Male" > Male </option>
       <option value="Female" > Female </option>
       <option value="Others" > Others </option>
        </select>
  

     {values.edit && (
      <label htmlFor="currentPosition">
        Current Position:
        
        {touched.currentPosition &&
          errors.currentPosition && <p>{errors.currentPosition}</p>}
        <Field
          type="text"
          name="currentPosition"
          placeholder="currentPosition"
        />
      </label>
    )}
   
    <label htmlFor="email">
     <Label> Email: </Label>
      </label>
      {touched.email && errors.email && <FormError>{errors.email}</FormError>}
      <Field type="email" name="email" placeholder="Email" />

    <label htmlFor="password">
     <Label> Password: </Label>
      </label>
      {touched.Password && errors.password && <FormError>{errors.password} </FormError>}
      <Field type="password" name="password" placeholder="Password" />
   
    <label htmlFor="confirmPassword">
     <Label> Confirm Password: </Label>
      </label>
      {touched.confirmPassword &&
        errors.confirmPassword && <FormError>{errors.confirmPassword} </FormError>}
      <Field
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password."
      />
   
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  
  </StyledForm>
  </Container>
);

const FormikTeacherRegistration = withFormik({
  mapPropsToValues({
    name,
    email,
    dateOfBirth,
    gender,
    currentPosition,
    edit,
  } = {}) {
    return {
      name: name || '',
      email: email || '',
      dateOfBirth: dateOfBirth ? moment(dateOfBirth).format('YYYY-MM-DD') : '',
      gender: gender || '',
      currentPosition: currentPosition || '',
      password: '',
      confirmPassword: '',
      edit: edit || '',
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required for registration'),
    email: Yup.string()
      .email('Email is not a valid email.')
      .required('Email is required for registration.'),
    dateOfBirth: Yup.date(),
    currentPosition: Yup.string().required('currentPosition musted be entered'),
  }),
  handleSubmit(val, { props, setErrors, setSubmitting }) {
    if (val.password) {
      if (val.password !== val.confirmPassword) {
        setErrors({ confirmPassword: 'Passwords do not match.' });
        setSubmitting(false);
      } else {
        props
          .onSubmit(val)
          .then(() => {
            setSubmitting(false);
            props.history.push('/teacher/myprofile');
          })
          .catch((err) => {
            setErrors({ error: `Something Went wrong ${err}` });
            setSubmitting(false);
          });
      }
    } else {
      props
        .onSubmit(val)
        .then(() => {
          setSubmitting(false);
          props.history.push('/teacher/myprofile');
        })
        .catch((err) => {
          setErrors({ error: `Something Went wrong ${err}` });
          setSubmitting(false);
        });
    }
  },
})(TeacherRegistration);

export default FormikTeacherRegistration;
