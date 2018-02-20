import React from 'react';
import { connect } from 'react-redux';

// Components
import AccomplishmentForm from './../../components/StudentDashboard/AccomplishmentForm';

// eslint-disable-next-line
import { Page } from 'theme/Components';

// Actions
import { startAddAccomplishment } from './../../actions/studentSecondary';

const AddAccomplishment = ({ addAccomplishment, history }) => (
  <div>
    <Page>
      <h2>Add Accomplishment</h2>
      <AccomplishmentForm onSubmit={addAccomplishment} history={history} />
    </Page>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addAccomplishment: (val) => dispatch(startAddAccomplishment(val)),
});

export default connect(undefined, mapDispatchToProps)(AddAccomplishment);
