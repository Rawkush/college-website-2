import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const NotificationForm = ({ values, errors, touched, isSubmitting }) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    Title:
    {touched.title && errors.title && <p>{errors.title}</p>}
    <Field type="text" name="title" placeholder="Title" />
    Description:
    {touched.description && errors.description && <p>{errors.description}</p>}
    <Field type="text" name="description" placeholder="Description" />
    <label htmlFor="teacher">
      Teacher:
      {touched.teacher && errors.teacher && <p>{errors.teacher}</p>}
      <Field type="checkbox" name="teacher" checked={values.teacher} />
    </label>
    <label htmlFor="student">
      Student:
      {touched.student && errors.student && <p>{errors.student}</p>}
      <Field type="checkbox" name="student" checked={values.student} />
    </label>
    <label htmlFor="googleForm">
      Google Form:
      {touched.googleForm && errors.googleForm && <p>{errors.googleForm}</p>}
      <Field type="checkbox" name="googleForm" checked={values.googleForm} />
    </label>
    <label htmlFor="pdf">
      PDF:
      {touched.pdf && errors.pdf && <p>{errors.pdf}</p>}
      <Field type="checkbox" name="pdf" checked={values.pdf} />
    </label>
    <label htmlFor="external">
      External Link:
      {touched.external && errors.external && <p>{errors.external}</p>}
      <Field type="checkbox" name="external" checked={values.external} />
    </label>
    <label htmlFor="iyear">
      First Year:
      {touched.iyear && errors.iyear && <p>{errors.iyear}</p>}
      <Field type="checkbox" name="iyear" checked={values.iyear} />
    </label>
    <label htmlFor="iiyear">
      Second Year:
      {touched.iiyear && errors.iiyear && <p>{errors.iiyear}</p>}
      <Field type="checkbox" name="iiyear" checked={values.iiyear} />
    </label>
    <label htmlFor="iiiyear">
      Third Year:
      {touched.iiiyear && errors.iiiyear && <p>{errors.iiiyear}</p>}
      <Field type="checkbox" name="iiiyear" checked={values.iiiyear} />
    </label>
    <label htmlFor="ivyear">
      Fourth Year:
      {touched.ivyear && errors.ivyear && <p>{errors.ivyear}</p>}
      <Field type="checkbox" name="ivyear" checked={values.ivyear} />
    </label>
    <label htmlFor="it">
      I.T.:
      {touched.it && errors.it && <p>{errors.it}</p>}
      <Field type="checkbox" name="it" checked={values.it} />
    </label>
    <label htmlFor="civil">
      Civil:
      {touched.civil && errors.civil && <p>{errors.civil}</p>}
      <Field type="checkbox" name="civil" checked={values.civil} />
    </label>
    <label htmlFor="env">
      Environment:
      {touched.env && errors.env && <p>{errors.env}</p>}
      <Field type="checkbox" name="env" checked={values.env} />
    </label>
    <label htmlFor="file">
      File:
      <input
        type="file"
        name="file"
        id="file"
        onChange={(e) => {
          values.file = e.currentTarget.files[0];
        }}
      />
    </label>
    <button disabled={!!isSubmitting}> Submit </button>
  </Form>
);

const FormikNotificationForm = withFormik({
  mapPropsToValues({
    title = '',
    description = '',
    student = '',
    teacher = '',
    iyear = '',
    iiyear = '',
    iiiyear = '',
    ivyear = '',
    googleForm = '',
    pdf = '',
    external = '',
    civil = '',
    it = '',
    env = '',
  }) {
    return {
      title,
      description,
      student,
      teacher,
      iyear,
      iiyear,
      iiiyear,
      ivyear,
      googleForm,
      pdf,
      external,
      civil,
      it,
      env,
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required.'),
    description: Yup.string(),
    student: Yup.boolean(),
    teacher: Yup.boolean(),
    iyear: Yup.boolean(),
    iiyear: Yup.boolean(),
    iiiyear: Yup.boolean(),
    ivyear: Yup.boolean(),
    googleForm: Yup.boolean(),
    pdf: Yup.boolean(),
    external: Yup.boolean(),
    civil: Yup.boolean(),
    it: Yup.boolean(),
    env: Yup.boolean(),
  }),
  handleSubmit(val, { resetForm, setErrors, setSubmitting }) {
    const formdata = new FormData();
    formdata.append('title', val.title);
    formdata.append('description', val.description);
    const tags = [
      val.student ? 'student' : null,
      val.teacher ? 'teacher' : '',
      val.iyear ? 'iyear' : '',
      val.iiyear ? 'iiyear' : '',
      val.iiiyear ? 'iiiyear' : '',
      val.ivyear ? 'ivyear' : '',
      val.googleForm ? 'googleform' : '',
      val.pdf ? 'pdf' : '',
      val.external ? 'external' : '',
      val.civil ? 'civil' : '',
      val.it ? 'it' : '',
      val.env ? 'env' : '',
    ];
    formdata.append('tags[]', tags);
    formdata.append('title', val.title);
    formdata.append('description', val.description);
    formdata.append('file', val.file);
    axios({
      method: 'post',
      url: 'http://localhost:3000/s/admin/addnotification',
      data: formdata,
      config: { headers: { 'Content-Type': 'multipart/form-data' } },
    })
      .then(() => {
        resetForm();
        console.log('success');
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err);
        resetForm();
        setErrors({ error: 'Something Went Wrong! Maybe file was too large.' });
        setSubmitting(false);
      });
  },
})(NotificationForm);

export default FormikNotificationForm;
