import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const ProjectForm = ({
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
    <label htmlFor="link">
      Link:
      {touched.link && errors.link && <p>{errors.link}</p>}
      <Field type="text" name="link" placeholder="www.myproject.com" />
    </label>
    <label htmlFor="photo">
      Photo:
      {touched.photo && errors.photo && <p>{errors.photo}</p>}
      <input
        type="file"
        name="photos"
        id="photos"
        onChange={(e) => {
          setFieldValue('photos', e.currentTarget.files);
        }}
        multiple
        accept="image/*"
      />
    </label>
    {
      // values.edit &&
      //   values.photo &&
      //   !(values.photo instanceof Blob) && (
      //     <img
      //       src={`http://localhost:3000/${values.photo}`}
      //       alt="accomplishment"
      //       height="100px"
      //       width="100px"
      //     />
      //   )
    }
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
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </Form>
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
  }) {
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
      .catch(() => {
        setErrors({ error: 'Something Went Wrong!' });
        setSubmitting(false);
      });
  },
})(ProjectForm);

export default FormikProjectForm;
