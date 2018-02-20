import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
  startEditTimeTable,
  startRemoveTimeTable,
} from './../../actions/timeTable';

// Component
import TimeTableForm from './../../components/adminDashboard/TimeTableForm';

// eslint-disable-next-line
import { Page } from 'theme/Components';

const EditTimeTablePage = ({
  timeTable,
  editTimeTable,
  removeTimeTable,
  history,
}) => (
  <Page>
    <h2>Edit Time Table</h2>
    <TimeTableForm
      {...timeTable}
      history={history}
      onSubmit={editTimeTable}
      deleteTimeTable={removeTimeTable}
      edit
    />
  </Page>
);

const mapStateToProps = (state, props) => ({
  timeTable: state.timeTable.find(
    (timeTableItem) => timeTableItem._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editTimeTable: (val, _id) => dispatch(startEditTimeTable(val, _id)),
  removeTimeTable: (_id) => dispatch(startRemoveTimeTable(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTimeTablePage);
