import React from 'react';
import { withFormik, Field } from 'formik';
import Yup from 'yup';

import { StyledForm, FormError } from 'theme/Components';

const TeacherNotificationForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isSubmitting,
  setFieldValue,
}) => (
  <StyledForm>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="title">Title:</label>
    {touched.title && errors.title && <FormError>{errors.title}</FormError>}
    <Field type="text" id="title" name="title" placeholder="Title" />
    <label htmlFor="description">Description:</label>
    {touched.description &&
      errors.description && <FormError>{errors.description}</FormError>}
    <Field
      type="text"
      id="description"
      name="description"
      placeholder="Description"
    />
    <label htmlFor="link">Link:</label>
    {touched.link && errors.link && <FormError>{errors.link}</FormError>}
    <Field type="text" id="link" name="link" placeholder="URL (If any.)" />
    <label htmlFor="branch">Branch:</label>
    {touched.branch && errors.branch && <FormError>{errors.branch}</FormError>}
    <select
      name="branch"
      id="branch"
      value={values.branch}
      onChange={handleChange}
      onBlur={handleBlur}
    >
      <option value="" disabled>
        Select the Branch
      </option>
      <option value="it">Information Technology</option>
      <option value="civil">Civil Engineering</option>
      <option value="env">Environment Engineering</option>
      <option value="">All Branches</option>
    </select>

    <label htmlFor="year">Year:</label>

    {touched.year && errors.year && <FormError>{errors.year}</FormError>}
    <select
      name="year"
      id="year"
      value={values.year}
      onChange={handleChange}
      onBlur={handleBlur}
    >
      <option value="" disabled>
        Select the year
      </option>
      <option value="iyear">First Year</option>
      <option value="iiyear">Second Year</option>
      <option value="iiiyear">Third Year</option>
      <option value="ivyear">Fourth Year</option>
      <option value="">All years</option>
    </select>
    <label htmlFor="rollNo">
      {touched.rollNo &&
        errors.rollNo && <FormError>{errors.rollNo}</FormError>}
      Roll Number:
    </label>
    <Field
      type="text"
      name="rollNo"
      placeholder="Enter the students roll number"
    />

    {!values.edit && <label htmlFor="file">File:</label>}
    {!values.edit && (
      <input
        type="file"
        name="file"
        id="file"
        onChange={(e) => {
          setFieldValue('file', e.currentTarget.files[0]);
        }}
      />
    )}

    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
    {values.title &&
      values.edit && (
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

const FormikTeacherNotificationForm = withFormik({
  mapPropsToValues({
    title = '',
    description = '',
    file = '',
    link = '',
    tags = {},
    _id = '',
    remove = '',
    edit = '',
    history = '',
  } = {}) {
    return {
      title,
      description,
      file,
      link,
      branch: tags.branch || '',
      year: tags.year || '',
      rollNo: tags.rollNo || '',
      _id,
      remove,
      edit,
      history,
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required.'),
    description: Yup.string(),
    branch: Yup.string(),
    year: Yup.string(),
    rollNo: Yup.number(),
  }),
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    props
      .onSubmit(val, props._id)
      .then(() => {
        resetForm();
        setSubmitting(false);
        props.history.push('/teacher/myprofile');
      })
      .catch(() => {
        setErrors({ error: 'Something Went Wrong!' });
      });
  },
})(TeacherNotificationForm);

export default FormikTeacherNotificationForm;
