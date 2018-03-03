import React from 'react';
import { withFormik, Form, Field } from 'formik';
import { StyledForm, HR, FormError } from 'theme/Components';
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
  <StyledForm>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="name">Name: </label>
    {touched.name && errors.name && <FormError>{errors.name}</FormError>}
    <Field type="text" name="name" placeholder="Enter the name of the event." />

    <label htmlFor="date">Date: </label>
    {touched.date && errors.date && <FormError>{errors.date}</FormError>}
    <Field type="date" name="date" placeholder="When this event took place." />

    <label htmlFor="place">Place: </label>
    {touched.place && errors.place && <FormError>{errors.place}</FormError>}
    <Field
      type="text"
      name="place"
      placeholder="Where this event took place."
    />
    <label htmlFor="description">Description:</label>
    {touched.description &&
      errors.description && <FormError>{errors.description}</FormError>}
    <Field type="text" name="description" placeholder="Description" />
    <label htmlFor="type">Type: </label>
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
      {/* <option value="tech">Tech Event</option> */}
      <option value="sports">Sports Event</option>
    </select>
    {!values.edit && (
      <StyledForm>
        <HR w="25vw" m="30px auto 0px auto" />
        <label htmlFor="mainPhoto">Main photo:</label>
        <input
          type="file"
          name="mainPhoto"
          id="mainPhoto"
          onChange={(e) => {
            setFieldValue('mainPhoto', e.currentTarget.files[0]);
          }}
        />

        <label htmlFor="photo1">Photo 1:</label>
        <input
          type="file"
          name="photo1"
          id="photo1"
          onChange={(e) => {
            setFieldValue('photo1', e.currentTarget.files[0]);
          }}
        />
        <label htmlFor="photo2">Photo 2:</label>
        <input
          type="file"
          name="photo2"
          id="photo2"
          onChange={(e) => {
            setFieldValue('photo2', e.currentTarget.files[0]);
          }}
        />
        <label htmlFor="photo3">Photo 3:</label>
        <input
          type="file"
          name="photo3"
          id="photo3"
          onChange={(e) => {
            setFieldValue('photo3', e.currentTarget.files[0]);
          }}
        />
        <label htmlFor="photo4">Photo 4:</label>
        <input
          type="file"
          name="photo4"
          id="photo4"
          onChange={(e) => {
            setFieldValue('photo4', e.currentTarget.files[0]);
          }}
        />
      </StyledForm>
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
  </StyledForm>
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
