import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Page } from 'theme/Components';

class TeacherLoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { edit: false, profile: false };
  }

  componentWillReceiveProps(nextProp) {
    if (nextProp.teacher.name) {
      this.setState(() => ({ profile: true }));
    } else {
      this.setState(() => ({ edit: true }));
    }
  }

  render() {
    if (this.state.edit) {
      return <Redirect to="/teacher/editprofile" />;
    } else if (this.state.profile) {
      return <Redirect to="/teacher/myprofile" />;
    }
    return (
      <Page>
        <Container>
          <p>Loading ...</p>
        </Container>
      </Page>
    );
  }
}

const mapStateToProps = (state) => ({
  teacher: state.teacherPrimary,
});

export default connect(mapStateToProps)(TeacherLoginPage);
