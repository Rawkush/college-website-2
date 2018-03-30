import React from 'react';
import { withFormik, Field } from 'formik';
import Yup from 'yup';
import moment from 'moment';
import { StyledForm, FormError } from 'theme/Components';

const SyllabusForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  handleBlur,
  handleChange,
  setFieldValue,
}) => (
  <StyledForm>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="title"> Title: </label>
    {touched.title && errors.title && <FormError>{errors.title}</FormError>}
    <Field
      type="text"
      name="title"
      id="title"
      placeholder="Enter the title."
      required
    />

    <label htmlFor="wef">With Effective from: </label>
    {touched.wef && errors.wef && <FormError>{errors.wef}</FormError>}
    <Field type="date" name="wef" id="wef" />

    <label htmlFor="semester "> Semester: </label>
    {touched.semester &&
      errors.semester && <FormError>{errors.semester}</FormError>}
    <select
      name="semester"
      id="semester"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.semester}
      required
    >
      <option value="" disabled>
        Select the semester.
      </option>
      <option value="odd">Odd</option>
      <option value="even">Even</option>
    </select>
    {values.file &&
      values.edit && (
        <a href={values.file} target="_blank">
          Preview already uploaded file.
        </a>
      )}
    <label htmlFor="file">File: </label>
    <input
      type="file"
      name="file"
      id="file"
      onChange={(e) => {
        setFieldValue('file', e.currentTarget.files[0]);
      }}
      required
    />

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
              .then(() => values.history.push('/admin/timetable'));
          }}
        >
          Remove
        </button>
      )}
  </StyledForm>
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
        .catch((error) => {
          setErrors({ error: 'Something Went Wrong!' });
          alert(error);
          window.scrollTo(0, 0);
          setSubmitting(false);
        });
    }
  },
})(SyllabusForm);

export default FormikSyllabusForm;
