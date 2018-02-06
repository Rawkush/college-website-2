import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import moment from 'moment';

const SyllabusForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  handleBlur,
  handleChange,
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
        id="title"
        placeholder="Enter the title."
      />
    </label>
    <label htmlFor="wef">
      With Effective from:
      {touched.wef && errors.wef && <p>{errors.wef}</p>}
      <Field type="date" name="wef" id="wef" />
    </label>
    <hr />
    <label htmlFor="semester ">
      Semester:
      {touched.semester && errors.semester && <p>{errors.semester}</p>}
      <select
        name="semester"
        id="semester"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.semester}
      >
        <option value="" disabled>
          Select the semester.
        </option>
        <option value="odd">Odd</option>
        <option value="even">Even</option>
      </select>
    </label>
    <hr />
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
              .deleteTimeTable(values._id)
              .then(() => values.history.push('/admin/syllabus'));
          }}
        >
          Remove
        </button>
      )}
  </Form>
);

const FormikSyllabusForm = withFormik({
  mapPropsToValues({
    _id = '',
    semester = '',
    wef = '',
    title = '',
    file = '',
    deleteTimeTable = '',
    history = '',
    edit = '',
  }) {
    return {
      _id,
      wef: wef ? moment(wef).format('YYYY-MM-DD') : '',
      title,
      semester,
      file,
      deleteTimeTable,
      history,
      edit,
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required.'),
    wef: Yup.string().required('Date is required.'),
    semester: Yup.string().required('Semester is required.'),
  }),
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    if (!val.file) {
      setErrors({ error: 'File is required ' });
      setSubmitting(false);
    } else {
      props
        .onSubmit(val, props._id)
        .then(() => {
          resetForm();
          setSubmitting(false);
          props.history.push('/admin/timetable');
        })
        .catch(() => {
          setErrors({ error: 'Something Went Wrong!' });
          setSubmitting(false);
        });
    }
  },
})(SyllabusForm);

export default FormikSyllabusForm;
