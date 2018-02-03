import React from 'react';
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
    Link:
    {touched.link && errors.link && <p>{errors.link}</p>}
    <Field type="text" name="link" placeholder="URL (If any.)" />
    <hr />
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
    <hr />
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
    <hr />
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
    <hr />
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
    <hr />
    {values.file && (
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
    {values.file && (
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
          values.file = e.currentTarget.files[0];
        }}
      />
    </label>
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
    {values.title && (
      <button
        type="button"
        onClick={() => {
          values
            .deleteNotification(values._id)
            .then(() => values.history.push('/admin/notifications'));
        }}
      >
        Remove
      </button>
    )}
  </Form>
);

const FormikNotificationForm = withFormik({
  mapPropsToValues(props) {
    return {
      title: props.title || '',
      description: props.description || '',
      link: props.link || '',
      file: props.file || '',
      student: props.tags ? props.tags.includes('student') : '',
      teacher: props.tags ? props.tags.includes('teacher') : '',
      iyear: props.tags ? props.tags.includes('iyear') : '',
      iiyear: props.tags ? props.tags.includes('iiyear') : '',
      iiiyear: props.tags ? props.tags.includes('iiiyear') : '',
      ivyear: props.tags ? props.tags.includes('ivyear') : '',
      googleForm: props.tags ? props.tags.includes('googleForm') : '',
      pdf: props.tags ? props.tags.includes('pdf') : '',
      external: props.tags ? props.tags.includes('external') : '',
      civil: props.tags ? props.tags.includes('civil') : '',
      it: props.tags ? props.tags.includes('it') : '',
      env: props.tags ? props.tags.includes('env') : '',
      deleteNotification: props.deleteNotification,
      history: props.history,
      _id: props._id,
      removeFile: false,
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
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    props
      .onSubmit(val, props._id)
      .then(() => {
        resetForm();
        setSubmitting(false);
        props.history.push('/admin/notifications');
      })
      .catch(() => {
        setErrors({ error: 'Something Went Wrong!' });
      });
  },
})(NotificationForm);

export default FormikNotificationForm;
