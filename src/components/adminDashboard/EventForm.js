import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';

const NotificationForm = ({
  values,
  errors,
  touched,
  isSubmitting,
  setFieldValue,
}) => (
  <Form>
    {errors.error && <p>{errors.error}</p>}
    <label htmlFor="name">
      Name:
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field
        type="text"
        name="name"
        placeholder="Enter the name of the event."
      />
    </label>
    <label htmlFor="description">
      Description:
      {touched.description && errors.description && <p>{errors.description}</p>}
      <Field type="text" name="description" placeholder="Description" />
    </label>
    <label htmlFor="date">
      Link:
      {touched.date && errors.date && <p>{errors.date}</p>}
      <Field
        type="text"
        name="date"
        placeholder="When this event took place."
      />
    </label>
    <label htmlFor="place">
      Place:
      {touched.place && errors.place && <p>{errors.place}</p>}
      <Field
        type="text"
        name="place"
        placeholder="Where this event took place."
      />
    </label>
    <hr />
    <label htmlFor="mainPhoto">
      Main photo:
      <input
        type="file"
        name="mainPhoto"
        id="mainPhoto"
        onChange={(e) => {
          setFieldValue('mainPhoto', e.currentTarget.files[0]);
        }}
      />
    </label>
    <label htmlFor="photo1">
      Photo 1:
      <input
        type="file"
        name="photo1"
        id="photo1"
        onChange={(e) => {
          setFieldValue('photo1', e.currentTarget.files[0]);
        }}
      />
    </label>
    <label htmlFor="photo2">
      File:
      <input
        type="file"
        name="photo2"
        id="photo2"
        onChange={(e) => {
          setFieldValue('photo2', e.currentTarget.files[0]);
        }}
      />
    </label>
    <label htmlFor="photo3">
      File:
      <input
        type="file"
        name="photo3"
        id="photo3"
        onChange={(e) => {
          setFieldValue('photo3', e.currentTarget.files[0]);
        }}
      />
    </label>
    <label htmlFor="photo4">
      File:
      <input
        type="file"
        name="photo4"
        id="photo4"
        onChange={(e) => {
          setFieldValue('photo4', e.currentTarget.files[0]);
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
            .deleteEvent(values._id)
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
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(
      'Oops! Seems like you forgot the name of the Event.'
    ),
    description: Yup.string().required('Description is required.'),
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
