import React from 'react';
import { withFormik, Field } from 'formik';
import { StyledForm, FormError } from 'theme/Components';

const SpecialisationForm = ({ isSubmitting, errors }) => (
  <StyledForm mtop="20px">
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="title">Specialisations: </label>
    <Field type="text" name="s1" placeholder="JavaScript" />
    <Field type="text" name="s2" placeholder="NodeJS" />
    <Field type="text" name="s3" placeholder="ReactJS" />
    <Field type="text" name="s4" placeholder="MongoDB" />
    <Field type="text" name="s5" placeholder="ExressJS" />

    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </StyledForm>
);

const FormikSpecialisationForm = withFormik({
  mapPropsToValues({ specialisation = [] } = {}) {
    const [s1, s2, s3, s4, s5] = specialisation;
    return {
      s1: s1 || '',
      s2: s2 || '',
      s3: s3 || '',
      s4: s4 || '',
      s5: s5 || '',
    };
  },
  handleSubmit(val, { props, resetForm, setErrors, setSubmitting }) {
    props
      .onSubmit(val)
      .then(() => {
        resetForm();
        setSubmitting(false);
        props.history.push('/student/myprofile');
      })
      .catch(() => {
        setErrors({ error: 'Something Went Wrong!' });
        setSubmitting(false);
      });
  },
})(SpecialisationForm);

export default FormikSpecialisationForm;
