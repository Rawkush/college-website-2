import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const TeacherNotificationForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isSubmitting,
  setFieldValue,
}) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    Title:
    {touched.title && errors.title && <p>{errors.title}</p>}
    <Field type="text" name="title" placeholder="Title" />
    Description:
    {touched.description && errors.description && <p>{errors.description}</p>}
    <Field type="text" name="description" placeholder="Description" />
    Link:
    {touched.link && errors.link && <p>{errors.link}</p>}
    <Field type="text" name="link" placeholder="URL (If any.)" />
    <hr />
    <label htmlFor="branch">
      Branch:
      {touched.branch && errors.branch && <p>{errors.branch}</p>}
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
    </label>
    <label htmlFor="year">
      {touched.year && errors.year && <p>{errors.year}</p>}
      Year:
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
    </label>
    <label htmlFor="rollNo">
      {touched.rollNo && errors.rollNo && <p>{errors.rollNo}</p>}
      Roll Number:
      <Field
        type="text"
        name="rollNo"
        placeholder="Enter the students roll number"
      />
    </label>
    {values.file &&
      values.edit && (
        <label htmlFor="removeFile">
          Remove File:
          <Field
            type="checkbox"
            name="removeFile"
            id="removeFile"
            checked={values.removeFile}
          />
        </label>
      )}
    {values.file &&
      values.edit && (
        <a href={values.file} target="_blank">
          Preview already uploaded file.
        </a>
      )}
    <label htmlFor="file">
      File:
      <input
        type="file"
        name="file"
        id="file"
        onChange={(e) => {
          setFieldValue('file', e.currentTarget.files[0]);
        }}
      />
    </label>
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
    {values.title &&
      values.edit && (
        <button
          type="button"
          onClick={() => {
            values
              .deleteNotification(values._id)
              .then(() => values.history.push('/teacher/notifications'));
          }}
        >
          Remove
        </button>
      )}
  </Form>
);

const FormikTeacherNotificationForm = withFormik({
  mapPropsToValues({
    title = '',
    description = '',
    file = '',
    link = '',
    tags = {},
    _id = '',
    removeNotification = '',
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
      removeNotification,
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
