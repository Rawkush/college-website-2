import React from 'react';
import { withFormik, Form, Field } from 'formik';
import Yup from 'yup';
import moment from 'moment';

const NotificationForm = ({
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
    <label htmlFor="name">
      Name:
      {touched.name && errors.name && <p>{errors.name}</p>}
      <Field
        type="text"
        name="name"
        placeholder="Enter the name of the event."
      />
    </label>
    <label htmlFor="date">
      Date:
      {touched.date && errors.date && <p>{errors.date}</p>}
      <Field
        type="date"
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
    <label htmlFor="description">
      Description:
      {touched.description && errors.description && <p>{errors.description}</p>}
      <Field type="text" name="description" placeholder="Description" />
    </label>
    <hr />
    <select
      name="type"
      id="type"
      value={values.type}
      onChange={handleChange}
      onBlur={handleBlur}
    >
      <option value="" disabled>
        Select the type of the Event
      </option>
      <option value="cultural">Cultural Event</option>
      <option value="tech">Tech Event</option>
      <option value="sports">Sports Event</option>
    </select>
    <hr />
    {!values.edit && (
      <div>
        {' '}
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
        <hr />
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
        <hr />
        <label htmlFor="photo2">
          Photo 2:
          <input
            type="file"
            name="photo2"
            id="photo2"
            onChange={(e) => {
              setFieldValue('photo2', e.currentTarget.files[0]);
            }}
          />
        </label>
        <hr />
        <label htmlFor="photo3">
          Photo 3:
          <input
            type="file"
            name="photo3"
            id="photo3"
            onChange={(e) => {
              setFieldValue('photo3', e.currentTarget.files[0]);
            }}
          />
        </label>
        <hr />
        <label htmlFor="photo4">
          Photo 4:
          <input
            type="file"
            name="photo4"
            id="photo4"
            onChange={(e) => {
              setFieldValue('photo4', e.currentTarget.files[0]);
            }}
          />
        </label>
        <hr />
      </div>
    )}
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
    {values.edit && (
      <button
        type="button"
        onClick={() => {
          values
            .deleteEvent(values._id)
            .then(() => values.history.push('/admin/events'));
        }}
      >
        Remove
      </button>
    )}
  </Form>
);

const FormikNotificationForm = withFormik({
  mapPropsToValues({
    name = '',
    date = '',
    place = '',
    type = '',
    description = '',
    deleteEvent = '',
    history = '',
    _id = '',
    edit = '',
  }) {
    return {
      name,
      date: date ? moment(date).format('YYYY-MM-DD') : '',
      place,
      type,
      description,
      deleteEvent,
      history,
      _id,
      edit,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(
      'Oops! Seems like you forgot the name of the Event.'
    ),
    description: Yup.string()
      .min(100)
      .required('Description is required.'),
    date: Yup.date().required('Date of the Event is required.'),
    place: Yup.string().required('Place of the Event is required.'),
    type: Yup.string().required('Type of the Event is required.'),
  }),
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    if (!val.mainPhoto) {
      setErrors({ errors: 'Event requires a main photo!' });
    }
    setSubmitting(false);
    props
      .onSubmit(val, props._id)
      .then(() => {
        resetForm();
        setSubmitting(false);
        props.history.push('/admin/events');
      })
      .catch(() => {
        setErrors({ error: 'Something Went Wrong!' });
      });
  },
})(NotificationForm);

export default FormikNotificationForm;
