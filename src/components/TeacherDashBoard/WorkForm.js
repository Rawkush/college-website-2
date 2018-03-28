import React from 'react';
import { withFormik, Field } from 'formik';
import Yup from 'yup';
import { StyledForm, FormError } from 'theme/Components';

const WorkForm = ({ values, errors, touched, isSubmitting }) => (
  <StyledForm>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="title">Title:</label>
    {touched.title && errors.title && <FormError>{errors.tilte}</FormError>}
    <Field
      type="text"
      id="title"
      name="title"
      placeholder="what is your work."
      required
    />
    <label htmlFor="description">Description</label>
    {touched.description &&
      errors.description && <FormError>{errors.description}</FormError>}
    <Field
      type="text"
      id="description"
      name="description"
      placeholder="Describe your work."
      required
    />
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
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
  </StyledForm>
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
    title: Yup.string('Title of work is required.'),
    description: Yup.string('Description of the work is required'),
  }),
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    props
      .onSubmit(val)
      .then(() => {
        resetForm();
        setSubmitting(false);
        props.history.push('/teacher/myprofile');
      })
      .catch((error) => {
        setErrors({ error: 'Something Went Wrong!' });
        alert(error);
        window.scrollTo(0, 0);
        setSubmitting(false);
      });
  },
})(WorkForm);

export default FormikWorkForm;
