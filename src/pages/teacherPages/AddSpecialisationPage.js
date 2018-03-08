import React from 'react';
import { connect } from 'react-redux';

// Components
import SpecialisationForm from './../../components/TeacherDashBoard/SpecialisationForm';

// Actions
import { startUpdateSpecialisation } from './../../actions/teacherSecondary';

// eslint-disable-next-line
import { Page,H2 } from 'theme/Components';

const H3 = H2.extend`
font-size: 1.3;
text-align: center;
padding: 15px;
`;

const AddSpecialisation = ({
  updateSpecialisation,
  history,
  specialisation,
}) => (
  <Page> 
    <H3>Add Specialisation</H3>
    <SpecialisationForm
      onSubmit={updateSpecialisation}
      history={history}
      specialisation={specialisation}
    />
  </Page>
);

const mapStateToProps = (state) => ({
  specialisation: state.teacherSecondary.specialisation,
});

const mapDispatchToProps = (dispatch) => ({
  updateSpecialisation: (val) => dispatch(startUpdateSpecialisation(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSpecialisation);
