import React from 'react';
import { connect } from 'react-redux';

// Components
import AccomplishmentForm from './../../components/StudentDashboard/AccomplishmentForm';

// eslint-disable-next-line
import { Page, Container, H2ResAuto, FormWrapper } from 'theme/Components';

// Actions
import { startAddAccomplishment } from './../../actions/studentSecondary';

const AddAccomplishment = ({ addAccomplishment, history }) => (
  <div>
    <Page>
      <Container>
        <FormWrapper>
          <H2ResAuto>Add Accomplishment</H2ResAuto>
          <AccomplishmentForm onSubmit={addAccomplishment} history={history} />
        </FormWrapper>
      </Container>
    </Page>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  addAccomplishment: (val) => dispatch(startAddAccomplishment(val)),
});

export default connect(undefined, mapDispatchToProps)(AddAccomplishment);
