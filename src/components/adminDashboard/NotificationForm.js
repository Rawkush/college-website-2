import React from 'react';
import { withFormik, Field } from 'formik';
import Yup from 'yup';

import { StyledForm, FormError } from 'theme/Components';

const NotificationForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  setFieldValue,
}) => (
  <StyledForm>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="title">Title</label>
    {touched.title && errors.title && <p>{errors.title}</p>}
    <Field type="text" name="title" placeholder="Title" required />
    <label htmlFor="description">Description</label>
    {touched.description && errors.description && <p>{errors.description}</p>}
    <Field type="text" name="description" placeholder="Description" />
    <label htmlFor="link">Link</label>
    {touched.link && errors.link && <p>{errors.link}</p>}
    <Field type="text" name="link" placeholder="URL (If any.)" />
    <label htmlFor="teacher">Teacher: </label>
    {touched.teacher && errors.teacher && <p>{errors.teacher}</p>}
    <Field type="checkbox" name="teacher" checked={values.teacher} />
    <label htmlFor="student">Student: </label>
    {touched.student && errors.student && <p>{errors.student}</p>}
    <Field type="checkbox" name="student" checked={values.student} />
    <label htmlFor="googleForm">Google Form: </label>
    {touched.googleForm && errors.googleForm && <p>{errors.googleForm}</p>}
    <Field type="checkbox" name="googleForm" checked={values.googleForm} />
    <label htmlFor="pdf">PDF: </label>
    {touched.pdf && errors.pdf && <p>{errors.pdf}</p>}
    <Field type="checkbox" name="pdf" checked={values.pdf} />
    <label htmlFor="external">External Link: </label>
    {touched.external && errors.external && <p>{errors.external}</p>}
    <Field type="checkbox" name="external" checked={values.external} />
    <label htmlFor="iyear">First Year: </label>
    {touched.iyear && errors.iyear && <p>{errors.iyear}</p>}
    <Field type="checkbox" name="iyear" checked={values.iyear} />
    <label htmlFor="iiyear">Second Year: </label>
    {touched.iiyear && errors.iiyear && <p>{errors.iiyear}</p>}
    <Field type="checkbox" name="iiyear" checked={values.iiyear} />
    <label htmlFor="iiiyear">Third Year: </label>
    {touched.iiiyear && errors.iiiyear && <p>{errors.iiiyear}</p>}
    <Field type="checkbox" name="iiiyear" checked={values.iiiyear} />
    <label htmlFor="ivyear">Fourth Year: </label>
    {touched.ivyear && errors.ivyear && <p>{errors.ivyear}</p>}
    <Field type="checkbox" name="ivyear" checked={values.ivyear} />
    <label htmlFor="it">I.T.: </label>
    {touched.it && errors.it && <p>{errors.it}</p>}
    <Field type="checkbox" name="it" checked={values.it} />
    <label htmlFor="civil">Civil: </label>
    {touched.civil && errors.civil && <p>{errors.civil}</p>}
    <Field type="checkbox" name="civil" checked={values.civil} />
    <label htmlFor="env">Environment: </label>
    {touched.env && errors.env && <p>{errors.env}</p>}
    <Field type="checkbox" name="env" checked={values.env} />
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
    {values.title &&
      values.edit && (
        <button
          type="button"
          onClick={() => {
            values
              .deleteNotification(values._id)
              .then(() => values.history.push('/admin/dashboard'));
          }}
        >
          Remove
        </button>
      )}
  </StyledForm>
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
      edit: props.edit,
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Title is required.'),
    description: Yup.string().min(10),
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
        props.history.push('/admin/dashboard');
      })
      .catch((error) => {
        setErrors({ error: 'Something Went Wrong!' });
        window.scrollTo(0, 0);
        alert(error);
        setSubmitting(false);
      });
  },
})(NotificationForm);

export default FormikNotificationForm;
