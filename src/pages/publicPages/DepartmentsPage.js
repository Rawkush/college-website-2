import React, { Component } from 'react';
import { Page } from 'theme/Components';
import Faculty from './../../components/static/Departments/Faculty';
// import Nav from './../../components/static/Departments/Nav';
import Hero from './../../components/static/Departments/Hero';
// import Laboratory from './../../components/static/Departments/Laboratory';
import TeacherData from './../../components/static/Departments/TeacherData.json';

const giveBranch = (branch) => {
  if (branch === 'it') {
    return 'Information Technology';
  }
  if (branch === 'civil') {
    return 'Civil Engineering';
  }
  if (branch === 'allied') {
    return 'Allied Engineering';
  }
  if (branch === 'applied') {
    return 'Applied Science & Humanities';
  }
  return 'Environment Engineering';
};

class DepartmentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branch: this.props.match.params.branch,
    };
  }
  render() {
    return (
      <div>
        <Page mtp="69px">
          <Hero
            name={giveBranch(this.state.branch)}
            branch={this.state.branch}
          />
          <Faculty teachers={TeacherData[this.state.branch]} />
        </Page>
      </div>
    );
  }
}

export default DepartmentPage;
