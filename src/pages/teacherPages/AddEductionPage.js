import React from 'react';
import { connect } from 'react-redux';

// componets
import EducationForm from './../../components/TeacherDashBoard/EductionForm';

// actions
import { startUpdateEducation } from './../../actions/teacherSecondary';

// eslint-disable-next-line
import { Page, H2 } from 'theme/Components';

const H3 = H2.extend`
font-size: 1.3;
text-align: center;
padding: 15px;
`;

const AddEduction = ({ updateEducation, history, education }) => (
  <Page>
    <H3> Add Eduction </H3>
    <EducationForm
      onSubmit={updateEducation}
      history={history}
      education={education}
    />
  </Page>
);
const mapStateToProps = (state) => ({
  education: state.teacherSecondary.education,
});

const mapDispatchToProps = (dispatch) => ({
  updateEducation: (val) => dispatch(startUpdateEducation(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEduction);
