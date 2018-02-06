import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const AccomplishmentForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  setFieldValue,
}) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    <label htmlFor="title">
      Title:
      {touched.title && errors.title && <p>{errors.title}</p>}
      <Field
        type="text"
        name="title"
        placeholder="80% in DS Course of NPTEL."
      />
    </label>
    <label htmlFor="description">
      Description:
      {touched.description && errors.description && <p>{errors.description}</p>}
      <Field
        type="text"
        name="description"
        placeholder="This exam is about Data Structures on of the core field etc..."
      />
    </label>
    <label htmlFor="photo">
      Photo:
      {touched.photo && errors.photo && <p>{errors.photo}</p>}
      <input
        type="file"
        name="photo"
        id="photo"
        onChange={(e) => {
          setFieldValue('photo', e.currentTarget.files[0]);
        }}
      />
    </label>
    {values.edit &&
      values.photo &&
      !(values.photo instanceof Blob) && (
        <img
          src={`http://localhost:3000/${values.photo}`}
          alt="accomplishment"
          height="100px"
          width="100px"
        />
      )}
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
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </Form>
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
  }) {
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
