import React from 'react';
import { connect } from 'react-redux';

// Components
import AccomplishmentForm from './../../components/StudentDashboard/AccomplishmentForm';

// Actions
import {
  startEditAccomplishment,
  startRemoveAccomplishment,
} from './../../actions/studentSecondary';

const EditAccomplishment = ({
  editAccomplishment,
  removeAccomplishment,
  history,
  accomplishment,
}) => (
  <div>
    <h2>Edit Accomplishment</h2>
    {accomplishment ? (
      <AccomplishmentForm
        onSubmit={editAccomplishment}
        removeAccomplishment={removeAccomplishment}
        history={history}
        edit
        {...accomplishment}
      />
    ) : (
      <p>L</p>
    )}
  </div>
);

const mapStateToProps = (state, props) => ({
  accomplishment: state.studentSecondary.accomplishments.find(
    (accomplishment) => accomplishment._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editAccomplishment: (val) => dispatch(startEditAccomplishment(val)),
  removeAccomplishment: (_id) => dispatch(startRemoveAccomplishment(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAccomplishment);
