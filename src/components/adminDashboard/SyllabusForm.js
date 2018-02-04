import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const SyllabusForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  handleChange,
  handleBlur,
  setFieldValue,
}) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    Subject:
    {touched.subject && errors.subject && <p>{errors.subject}</p>}
    <Field type="text" name="subject" placeholder="Enter the subject." />
    Code No:
    {touched.codeNo && errors.codeNo && <p>{errors.codeNo}</p>}
    <Field
      type="text"
      name="codeNo"
      placeholder="Enter the code number here."
    />
    <hr />
    L:
    {touched.l && errors.l && <p>{errors.l}</p>}
    <Field type="l" name="l" />
    Status:
    {touched.status && errors.status && <p>{errors.status}</p>}
    <Field type="text" name="status" />
    TP:
    {touched.tp && errors.tp && <p>{errors.tp}</p>}
    <Field type="text" name="tp" />
    Credits:
    {touched.credits && errors.credits && <p>{errors.credits}</p>}
    <Field type="text" name="credits" />
    <hr />
    <label htmlFor="branch ">
      Branch:
      {touched.branch && errors.branch && <p>{errors.branch}</p>}
      <select
        name="branch"
        value={values.branch}
        id="branch"
        onChange={handleChange}
        onBlur={handleBlur}
      >
        <option value="" disabled>
          Select a branch
        </option>
        <option value="it">Information Technology</option>
        <option value="env">Environment</option>
        <option value="civil">Civil</option>
      </select>
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
        <option value="1">Semester 1</option>
        <option value="2">Semester 2</option>
        <option value="3">Semester 3</option>
        <option value="4">Semester 4</option>
        <option value="5">Semester 5</option>
        <option value="6">Semester 6</option>
        <option value="7">Semester 7</option>
        <option value="8">Semester 8</option>
      </select>
    </label>
    <hr />
    <label htmlFor="type ">
      Type:
      {touched.type && errors.type && <p>{errors.type}</p>}
      <select
        name="type"
        id="type"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.type}
      >
        <option value="" disabled>
          Select the type of syllabus.
        </option>
        <option value="theory">Theory</option>
        <option value="practical">Practical</option>
      </select>
    </label>
    <hr />
    <label htmlFor="period ">
      Period:
      {touched.period && errors.period && <p>{errors.period}</p>}
      <select
        name="period"
        id="period"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.period}
      >
        <option value="" disabled>
          Select the Period of syllabus.
        </option>
        <option value="new">New</option>
        <option value="old">Old</option>
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
    {values.subject &&
      values.edit && (
        <button
          type="button"
          onClick={() => {
            values
              .deleteSyllabus(values._id)
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
    branch = '',
    codeNo = '',
    semester = '',
    subject = '',
    l = '',
    tp = '',
    credits = '',
    status = '',
    period = '',
    type = '',
    file = '',
    deleteSyllabus = '',
    history = '',
    edit = '',
  }) {
    return {
      _id,
      branch,
      codeNo,
      semester,
      subject,
      l,
      tp,
      credits,
      status,
      period,
      type,
      file,
      deleteSyllabus,
      history,
      edit,
    };
  },
  validationSchema: Yup.object().shape({
    subject: Yup.string().required('Subject is required.'),
    codeNo: Yup.string().required('Code number id required.'),
    branch: Yup.string().required('Branch is Required'),
    semester: Yup.string().required('Semester is Required'),
    l: Yup.string().required('L is Required'),
    tp: Yup.string().required('TP is Required'),
    credits: Yup.string().required('Credits is Required'),
    status: Yup.string().required('Status is Required'),
    period: Yup.string().required('Period is Required'),
    type: Yup.string().required('Type is Required'),
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
          props.history.push('/admin/syllabus');
        })
        .catch(() => {
          setErrors({ error: 'Something Went Wrong!' });
        });
    }
  },
})(SyllabusForm);

export default FormikSyllabusForm;
