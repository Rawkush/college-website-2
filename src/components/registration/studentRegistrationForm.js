import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import media from 'theme/media';

const Button = styled.button`
  color: rgba(0, 0, 0, 0.8);
  background: none;
  padding: 10px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.22);
  transition: all 0.1s;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
    background: #c14545;
    color: #fff;
    border: 1px solid #c14545;
  }

  ${media.phone`
    font-size: 4vw;
  `};
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const StyledForm = styled(Form)`
  > label {
    display: block;
    padding: 15px 0px 5px 0px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
  > input {
    width: 100%;
    padding: 7px;
    ${media.phone`
      padding: 5px 0px 5px 5px;
      width: 97%;
    `};
    font-family: 'Open Sans', sans-serif;
    border-radius: 3px;
    border: solid 1px rgba(0, 0, 0, 0.27);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 1.5;
    &:focus {
      border: solid 1px red;
      box-shadow: 0 0 0 0.2rem rgba(179, 0, 0, 0.3);
    }
  }
  > select {
    width: 103%;
    padding: 7px;
    ${media.phone`
      padding: 5px 0px;
      width: 100%;
    `};
    font-family: 'Open Sans', sans-serif;
    border-radius: 3px;
    border: solid 1px rgba(0, 0, 0, 0.27);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 1.5;
    &:focus {
      border: solid 1px red;
      box-shadow: 0 0 0 0.2rem rgba(179, 0, 0, 0.3);
    }
  }
  > button {
    background: none;
    border: solid 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    padding: 10px 50px;
    color: rgba(0, 0, 0, 0.6);
    margin: 30px 0px;
    margin-left: ${({ left }) => left || '0'};
    border-radius: 3px;
    transition: all 0.15s ease-in-out;
    border: solid 1px rgba(179, 0, 0, 0.7);
    color: rgba(179, 0, 0, 0.7);
    &:hover {
      color: white;
      background: rgba(179, 0, 0, 0.7);
    }
  }
`;

const ErrorAlert = styled.p`
  color: red;
  font-family: 'Open Sans', sans-serif;
`;

const FeildWrapper = styled.div`
  width: 103%;
  ${media.phone`
    width: 100%;  
  `};
  > p {
    display: block;
    padding: 15px 0px 5px 0px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
  > div {
    > input {
      margin: 7px 3%;
      width: 40%;
      padding: 7px;
      ${media.phone`
      margin: 7px 0%;
      padding: 5px 0px 5px 5px;
      width: 97%;
    `};
      font-family: 'Open Sans', sans-serif;
      border-radius: 3px;
      border: solid 1px rgba(0, 0, 0, 0.27);
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      line-height: 1.5;
      &:focus {
        border: solid 1px red;
        box-shadow: 0 0 0 0.2rem rgba(179, 0, 0, 0.3);
      }
    }
  }
`;

const StudentRegistration = ({
  values,
  errors,
  touched,
  isSubmitting,
  handleBlur,
  handleChange,
  setErrors,
}) => (
  <StyledForm>
    {errors.error && <ErrorAlert>{errors.error}</ErrorAlert>}
    <label htmlFor="name">Name:</label>
    {touched.name && errors.name && <ErrorAlert>{errors.name}</ErrorAlert>}
    <Field
      type="text"
      name="name"
      id="name"
      placeholder="Enter your name here..."
    />
    <label htmlFor="rollNo">Roll Number:</label>
    {touched.rollNo &&
      errors.rollNo && <ErrorAlert>{errors.rollNo}</ErrorAlert>}
    <Field type="text" name="rollNo" placeholder="Roll Number" id="rollNo" />
    <label htmlFor="email">Email:</label>
    {touched.email && errors.email && <ErrorAlert>{errors.email}</ErrorAlert>}
    <Field type="email" name="email" placeholder="Email" id="email" />
    <label htmlFor="location">Location:</label>
    {touched.location &&
      errors.location && <ErrorAlert>{errors.location}</ErrorAlert>}
    <Field type="text" name="location" placeholder="Location" id="location" />
    <label htmlFor="dateOfBirth">Date of Birth:</label>
    {touched.dateOfBirth &&
      errors.dateOfBirth && <ErrorAlert>{errors.dateOfBirth}</ErrorAlert>}
    <Field
      type="date"
      name="dateOfBirth"
      placeholder="Date of Birth"
      id="dateOfBirth"
    />
    <label htmlFor="admittedIn">Admitted in:</label>
    {touched.admittedIn &&
      errors.admittedIn && <ErrorAlert>{errors.admittedIn}</ErrorAlert>}
    <input
      type="month"
      name="admittedIn"
      id="admittedIn"
      value={values.admittedIn}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    <label htmlFor="branch">Branch :</label>
    {touched.branch &&
      errors.branch && <ErrorAlert>{errors.branch}</ErrorAlert>}
    <select
      name="branch"
      id="branch"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.branch}
    >
      <option value="" disabled>
        Select the in which you are admitted.
      </option>
      <option value="it">I.T.</option>
      <option value="civil">Civil</option>
      <option value="env">Environment</option>
    </select>
    <label htmlFor="gender">Gender:</label>
    {touched.gender &&
      errors.gender && <ErrorAlert>{errors.gender}</ErrorAlert>}
    <select
      name="gender"
      id="gender"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.gender}
    >
      <option value="" disabled>
        Select your gender.
      </option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="other">Other</option>
    </select>
    <label htmlFor="bio">Bio:</label>
    {touched.bio && errors.bio && <ErrorAlert>{errors.bio}</ErrorAlert>}
    <Field type="textarea" name="bio" placeholder="Enter your Bio" id="bio" />
    {values.edit && (
      <FeildWrapper>
        <p>Links:</p>
        <div>
          <Field
            type="text"
            name="profile0"
            placeholder="eg. Google, LinkedIn, Portfolio"
          />
          <Field
            type="text"
            name="url0"
            placeholder="www.example.com/myprofile"
          />
        </div>
        <div>
          <Field
            type="text"
            name="profile1"
            placeholder="eg. Google, LinkedIn, Portfolio"
          />
          <Field
            type="text"
            name="url1"
            placeholder="www.example.com/myprofile"
          />
        </div>

        <div>
          <Field
            type="text"
            name="profile2"
            placeholder="eg. Google, LinkedIn, Portfolio"
          />
          <Field
            type="text"
            name="url2"
            placeholder="www.example.com/myprofile"
          />
        </div>

        <div>
          <Field
            type="text"
            name="profile3"
            placeholder="eg. Google, LinkedIn, Portfolio"
          />
          <Field
            type="text"
            name="url3"
            placeholder="www.example.com/myprofile"
          />
        </div>

        <div>
          <Field
            type="text"
            name="profile4"
            placeholder="eg. Google, LinkedIn, Portfolio"
          />
          <Field
            type="text"
            name="url4"
            placeholder="www.example.com/myprofile"
          />
        </div>
      </FeildWrapper>
    )}
    <button disabled={!!isSubmitting}> Submit </button>
    {values.edit && (
      <Wrapper>
        <Button
          left="20px"
          type="button"
          onClick={() => {
            values
              .onRemove()
              .then(() => values.history.push('/'))
              .catch(() => {
                setErrors({ error: 'Cannot Delete' });
              });
          }}
        >
          Delete Profile
        </Button>
      </Wrapper>
    )}
  </StyledForm>
);

const FormikStudentRegistration = withFormik({
  mapPropsToValues({
    edit,
    name,
    rollNo,
    email,
    location,
    dateOfBirth,
    gender,
    bio,
    branch,
    admittedIn,
    linkedProfiles = [],
    onRemove,
  } = {}) {
    const profile0 = linkedProfiles[0] ? linkedProfiles[0].provider : '';
    const url0 = linkedProfiles[0] ? linkedProfiles[0].url : '';
    const profile1 = linkedProfiles[1] ? linkedProfiles[1].provider : '';
    const url1 = linkedProfiles[1] ? linkedProfiles[1].url : '';
    const profile2 = linkedProfiles[2] ? linkedProfiles[2].provider : '';
    const url2 = linkedProfiles[2] ? linkedProfiles[2].url : '';
    const profile3 = linkedProfiles[3] ? linkedProfiles[3].provider : '';
    const url3 = linkedProfiles[3] ? linkedProfiles[3].url : '';
    const profile4 = linkedProfiles[4] ? linkedProfiles[4].provider : '';
    const url4 = linkedProfiles[4] ? linkedProfiles[4].url : '';

    return {
      name: name || '',
      rollNo: rollNo || '',
      email: email || '',
      location: location || '',
      dateOfBirth: dateOfBirth ? moment(dateOfBirth).format('YYYY-MM-DD') : '',
      gender: gender || '',
      bio: bio || '',
      branch: branch || '',
      admittedIn: admittedIn ? moment(admittedIn).format('YYYY-MM') : '',
      edit: edit || '',
      profile0,
      url0,
      profile1,
      url1,
      profile2,
      url2,
      profile3,
      url3,
      profile4,
      url4,
      onRemove: onRemove || '',
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required for registration'),
    email: Yup.string()
      .email('Email is not a valid email.')
      .required('Email is required for registration.'),
    rollNo: Yup.number('Roll number should be a number.')
      .positive('Roll number cannot be a negative number.')
      .required('Roll number is required for registration.'),
    location: Yup.string(),
    dateOfBirth: Yup.date().required('Date of birth is required.'),
    admittedIn: Yup.date().required('Your Admission year is required.'),
    branch: Yup.string().required('Branch is required.'),
    gender: Yup.string().required('Gender is required.'),
    bio: Yup.string()
      .min(50)
      .required('Bio is required (Min 50 charachters).'),
  }),
  handleSubmit(val, { props, setErrors, setSubmitting }) {
    const data = {
      ...props,
      ...val,
    };
    props
      .onSubmit(data)
      .then(() => {
        setSubmitting(false);
        props.history.push('/student/myprofile');
      })
      .catch((err) => {
        setErrors({ error: `Something Went wrong ${err}` });
        setSubmitting(false);
      });
  },
})(StudentRegistration);

export default FormikStudentRegistration;
