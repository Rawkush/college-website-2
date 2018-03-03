import React from 'react';
import { withFormik, Field } from 'formik';
import Yup from 'yup';
import { StyledForm, HR, FormError } from 'theme/Components';

const SyllabusForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  handleChange,
  handleBlur,
  setFieldValue,
}) => (
  <StyledForm>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="subject"> Subject:</label>
    {touched.subject &&
      errors.subject && <FormError>{errors.subject}</FormError>}
    <Field type="text" name="subject" placeholder="Enter the subject." />
    <label htmlFor="codeNo"> Code No: </label>
    {touched.codeNo && errors.codeNo && <FormError>{errors.codeNo}</FormError>}
    <Field
      type="text"
      name="codeNo"
      placeholder="Enter the code number here."
    />
    <HR w="25vw" m="30px auto 0px auto" />
    <label htmlFor="l"> L: </label>
    {touched.l && errors.l && <FormError>{errors.l}</FormError>}
    <Field type="l" name="l" />
    <label htmlFor="status"> Status: </label>
    {touched.status && errors.status && <FormError>{errors.status}</FormError>}
    <Field type="text" name="status" />
    <label htmlFor="tp"> TP: </label>
    {touched.tp && errors.tp && <FormError>{errors.tp}</FormError>}
    <Field type="text" name="tp" />
    <label htmlFor="credits"> Credits: </label>
    {touched.credits &&
      errors.credits && <FormError>{errors.credits}</FormError>}
    <Field type="text" name="credits" />
    <HR w="25vw" m="30px auto 0px auto" />
    <label htmlFor="branch ">Branch: </label>
    {touched.branch && errors.branch && <FormError>{errors.branch}</FormError>}
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

    <label htmlFor="semester ">Semester: </label>
    {touched.semester &&
      errors.semester && <FormError>{errors.semester}</FormError>}
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

    <label htmlFor="type ">Type: </label>
    {touched.type && errors.type && <FormError>{errors.type}</FormError>}
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

    <label htmlFor="period ">Period: </label>
    {touched.period && errors.period && <FormError>{errors.period}</FormError>}
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
    />

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
  </StyledForm>
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
