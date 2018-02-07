import React from 'react';
import { connect } from 'react-redux';

// Components
import AccomplishmentForm from './../../components/StudentDashboard/AccomplishmentForm';

// Actions
import { startAddAccomplishment } from './../../actions/studentSecondary';

const AddAccomplishment = ({ addAccomplishment, history }) => (
  <div>
    <h2>Add Accomplishment</h2>
    <AccomplishmentForm onSubmit={addAccomplishment} history={history} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addAccomplishment: (val) => dispatch(startAddAccomplishment(val)),
});

export default connect(undefined, mapDispatchToProps)(AddAccomplishment);
