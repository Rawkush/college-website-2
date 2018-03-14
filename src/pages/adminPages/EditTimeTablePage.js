import React from 'react';
import { connect } from 'react-redux';
import { Page, Container, FormWrapper, H2ResAuto } from 'theme/Components';

// Actions
import {
  startEditTimeTable,
  startRemoveTimeTable,
} from './../../actions/timeTable';

// Component
import TimeTableForm from './../../components/adminDashboard/TimeTableForm';

const EditTimeTablePage = ({
  timeTable,
  editTimeTable,
  removeTimeTable,
  history,
}) => (
  <Page>
    <Container>
      <FormWrapper>
        <H2ResAuto>Edit Time Table</H2ResAuto>
        <TimeTableForm
          {...timeTable}
          history={history}
          onSubmit={editTimeTable}
          deleteTimeTable={removeTimeTable}
          edit
        />
      </FormWrapper>
    </Container>
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
