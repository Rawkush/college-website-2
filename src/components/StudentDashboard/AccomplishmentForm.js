import React from 'react';
import { withFormik, Field } from 'formik';
import Yup from 'yup';
import { StyledForm, FormError } from 'theme/Components';
import styled from 'styled-components';

const Image = styled.img`
  display: block;
  height: 150px;
  width: auto;
  margin: 0 auto;
  padding: 20px 0px;
`;

const AccomplishmentForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  setFieldValue,
}) => (
  <StyledForm>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="title">Title: </label>
    {touched.title && errors.title && <FormError>{errors.title}</FormError>}
    <Field
      type="text"
      name="title"
      id="title"
      placeholder="80% in DS Course of NPTEL."
    />
    <label htmlFor="description">Description: </label>
    {touched.description &&
      errors.description && <FormError>{errors.description}</FormError>}
    <Field
      type="text"
      name="description"
      placeholder="This exam is about Data Structures on of the core field etc..."
      id="description"
    />
    <label htmlFor="photo">Photo: </label>
    {touched.photo && errors.photo && <FormError>{errors.photo}</FormError>}
    <input
      type="file"
      name="photo"
      id="photo"
      onChange={(e) => {
        setFieldValue('photo', e.currentTarget.files[0]);
      }}
    />
    {values.edit &&
      values.photo &&
      !(values.photo instanceof Blob) && (
        <Image src={`/${values.photo}`} alt="accomplishment" />
      )}
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>{' '}
    {values.edit && (
      <button
        type="button"
        onClick={() => {
          values
            .removeAccomplishment(values._id)
            .then(() => values.history.push('/student/myprofile'));
        }}
      >
        Remove
      </button>
    )}
  </StyledForm>
);

const FormikAccomplishmentForm = withFormik({
  mapPropsToValues({
    title = '',
    description = '',
    photo = '',
    history = '',
    _id = '',
    edit = '',
    removeAccomplishment = '',
  } = {}) {
    return {
      title,
      photo,
      description,
      removeAccomplishment,
      history,
      _id,
      edit,
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Oops! Seems like you forgot the title.'),
    description: Yup.string()
      .min(100)
      .required('Description is required.'),
    photo: Yup.mixed().required('Photo is required.'),
  }),
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    setSubmitting(false);
    props
      .onSubmit(val)
      .then(() => {
        resetForm();
        setSubmitting(false);
        props.history.push('/student/myprofile');
      })
      .catch(() => {
        setErrors({ error: 'Something Went Wrong!' });
        setSubmitting(false);
      });
  },
})(AccomplishmentForm);

export default FormikAccomplishmentForm;
