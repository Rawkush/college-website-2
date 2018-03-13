import React from 'react';
import { withFormik, Field } from 'formik';

import { StyledForm, FormError } from './../../theme/Components';

const StyledForms = StyledForm.extend`
  > input {
    width: 99%;
    margin: 10px 0px;
  }
`;

const SpecialisationForm = ({ isSubmitting, errors }) => (
  <StyledForms>
    {errors.error && <FormError>{errors.error}</FormError>}
    <label htmlFor="title">Specialisations:</label>
    <Field autoFocus type="text" id="title" name="sp1" placeholder="any" />
    <Field type="text" id="title" name="sp2" placeholder="any" />
    <Field type="text" id="title" name="sp3" placeholder="any" />
    <Field type="text" id="title" name="sp4" placeholder="any" />
    <Field type="text" id="title" name="sp5" placeholder="any" /> <br />
    <button disabled={!!isSubmitting} type="submit">
      Submit
    </button>
  </StyledForms>
);

const FormikSpecialisationForm = withFormik({
  mapPropsToValues({ specialisation }) {
    const [sp1, sp2, sp3, sp4, sp5] = specialisation;
    return {
      sp1: sp1 || '',
      sp2: sp2 || '',
      sp3: sp3 || '',
      sp4: sp4 || '',
      sp5: sp5 || '',
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
})(SpecialisationForm);

export default FormikSpecialisationForm;
