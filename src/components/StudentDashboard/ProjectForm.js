import React from 'react';
import { withFormik, Field } from 'formik';
import Yup from 'yup';
import { StyledForm, FormError } from 'theme/Components';

const ProjectForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  setFieldValue,
}) => (
  <StyledForm>
    {values.edit && (
      <p>
        Note: You cannot add more pictures while retaining your previous ones,
        you have to upload all pictures again. If you don not want to change
        pictures leave the feild empty.
      </p>
    )}
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="title">Title: </label>
    {touched.title && errors.title && <FormError>{errors.title}</FormError>}
    <Field
      type="text"
      name="title"
      placeholder="Made a project on XYZ thing."
      id="title"
      required
    />

    <label htmlFor="description">Description: </label>
    {touched.description &&
      errors.description && <FormError>{errors.description}</FormError>}
    <Field
      type="text"
      name="description"
      placeholder="Made this project using ABC and DEF things..."
      id="description"
      required
    />

    <label htmlFor="link">Link: </label>
    {touched.link && errors.link && <FormError>{errors.link}</FormError>}
    <Field type="text" name="link" placeholder="www.myproject.com" id="link" />

    <label htmlFor="photo">Photo: </label>
    <p>Will accept only 5 files max and not more that 1 MB.</p>
    {touched.photo && errors.photo && <FormError>{errors.photo}</FormError>}
    <input
      type="file"
      name="photos"
      id="photos"
      onChange={(e) => {
        setFieldValue('photos', e.currentTarget.files);
      }}
      multiple
      accept="image/*"
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
            .removeProject(values._id)
            .then(() => values.history.push('/student/myprofile'));
        }}
      >
        Remove
      </button>
    )}
  </StyledForm>
);

const FormikProjectForm = withFormik({
  mapPropsToValues({
    title = '',
    description = '',
    photos = '',
    history = '',
    link = '',
    _id = '',
    edit = '',
    removeProject = '',
  } = {}) {
    return {
      title,
      photos,
      description,
      removeProject,
      history,
      _id,
      edit,
      link,
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Oops! Seems like you forgot the title.'),
    description: Yup.string()
      .min(100)
      .required('Description is required.'),
    photos: Yup.mixed().required('Photos are required.'),
  }),
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    props
      .onSubmit(val)
      .then(() => {
        resetForm();
        setSubmitting(false);
        props.history.push('/student/myprofile');
      })
      .catch((error) => {
        setErrors({ error: 'Something Went Wrong!' });
        alert(error);
        window.scrollTo(0, 0);
        setSubmitting(false);
      });
  },
})(ProjectForm);

export default FormikProjectForm;
