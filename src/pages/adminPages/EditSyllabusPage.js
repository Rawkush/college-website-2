import React from 'react';
import { connect } from 'react-redux';
import { Page, FormWrapper, Container, H3 } from 'theme/Components';

// Component
import SyllabusForm from './../../components/adminDashboard/SyllabusForm';

// Actions
import {
  startEditSyllabus,
  startRemoveSyllabus,
} from './../../actions/syllabus';

const EditSyllabusPage = ({
  syllabus,
  history,
  editSyllabus,
  deleteSyllabus,
}) => (
  <div>
    {syllabus ? (
      <Page>
        <Container>
          <FormWrapper>
            <H3>Edit Syllabus</H3>
            <SyllabusForm
              {...syllabus}
              history={history}
              onSubmit={editSyllabus}
              deleteSyllabus={deleteSyllabus}
              edit
            />
          </FormWrapper>
        </Container>
      </Page>
    ) : (
      <p>L</p>
    )}
  </div>
);

const mapStateToProps = (state, props) => ({
  syllabus: state.syllabus.find(
    (syllabus) => syllabus._id === props.match.params._id
  ),
});

const mapDispatchToProps = (dispatch) => ({
  editSyllabus: (val, _id) => dispatch(startEditSyllabus(val, _id)),
  deleteSyllabus: (_id) => dispatch(startRemoveSyllabus(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSyllabusPage);
