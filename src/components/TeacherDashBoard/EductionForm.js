import React from 'react';
import { withFormik, Field } from 'formik';

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
    <Field autoFocus type="text" id="title" name="e1" placeholder="schooling" />
    <Field type="text" id="title" name="e2" placeholder="graduate" />
    <Field type="text" id="title" name="e3" placeholder="masters" />
    <Field type="text" id="title" name="e4" placeholder="phd" />
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
      .catch((error) => {
        setErrors({ error: 'Something Went Wrong!' });
        alert(error);
        window.scrollTo(0, 0);
        setSubmitting(false);
      });
  },
})(EducationForm);

export default FormikEducationForm;
