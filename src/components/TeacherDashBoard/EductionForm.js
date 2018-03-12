import React from 'react';
import { withFormik, Field } from 'formik';
import media from 'theme/media';

import { StyledForm, FormError } from 'theme/Components';

const StyledForms = StyledForm.extend`
  > input {
    margin: 5px;
  }
`;

const EducationForm = ({ isSubmitting, errors }) => (
  <StyledForms>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="title">Education:</label>
    <Field autoFocus type="text" id="title" name="e1" placeholder="any" />
    <Field type="text" id="title" name="e2" placeholder="any" />
    <Field type="text" id="title" name="e3" placeholder="any" />
    <Field type="text" id="title" name="e4" placeholder="any" />
    <Field type="text" id="title" name="e5" placeholder="any" /> <br />
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </StyledForms>
);

const FormikEducationForm = withFormik({
  mapPropsToValues({ education }) {
    const [e1, e2, e3, e4, e5] = education;
    return {
      e1: e1 || '',
      e2: e2 || '',
      e3: e3 || '',
      e4: e4 || '',
      e5: e5 || '',
    };
  },
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    props
      .onSubmit(val)
      .then(() => {
        resetForm();
        setSubmitting(false);
        props.history.push('/teacher/myprofile');
      })
      .catch(() => {
        setErrors({ error: 'Something Went Wrong!' });
        setSubmitting(false);
      });
  },
})(EducationForm);

export default FormikEducationForm;
