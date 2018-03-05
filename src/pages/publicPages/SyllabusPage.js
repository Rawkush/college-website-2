import React from 'react';
import { connect } from 'react-redux';
import { Page, Container } from 'theme/Components';

import SyllabusContainer from 'components/syllabus/syllabusContainer';

const SyllabusPage = ({ syllabusArray, match, auth }) => (
  <Page>
    <Container>
      {syllabusArray ? (
        <SyllabusContainer
          syllabusArray={syllabusArray}
          match={match}
          auth={auth}
        />
      ) : (
        <p> Loading ...</p>
      )}
    </Container>
  </Page>
);

const mapStateToProps = (state) => ({
  syllabusArray: state.syllabus,
  auth: state.auth.admin,
});

export default connect(mapStateToProps)(SyllabusPage);
