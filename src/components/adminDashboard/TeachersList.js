import React, { Component } from 'react';
import axios from 'axios';

// default Styled Components
import { BorderWrapper } from 'theme/Components';

// ComponetsImport
import TeachersListItem from './TeachersListItem';

class TeachersList extends Component {
  state = { teachersList: [], error: false, loading: true };
  componentDidMount() {
    axios({
      method: 'post',
      url: '/s/admin/giveallteacher',
      data: {
        token: localStorage.getItem('adminToken'),
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) =>
        this.setState(() => ({ teachersList: res.data, loading: false }))
      )
      .catch((err) => this.setState(() => ({ error: err })));
  }

  removeTeacher = (_id) => {
    this.setState(() => ({ loading: true }));
    axios({
      method: 'delete',
      url: '/s/admin/deleteteacher',
      data: {
        _id,
        token: localStorage.getItem('adminToken'),
      },
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) =>
        this.setState((prev) => ({
          teachersList: prev.teachersList.filter(
            (teacher) => teacher._id !== res.data._id
          ),
          loading: false,
        }))
      )
      .catch((err) => this.setState(() => ({ error: err })));
  };

  render() {
    return (
      <BorderWrapper p="10px" oflowy="scroll" h="450px">
        {this.state.error && <p>Some error Happened</p>}
        {this.state.loading ? (
          <p>Loading ...</p>
        ) : (
          this.state.teachersList.map((teacher) => (
            <TeachersListItem {...teacher} removeHandler={this.removeTeacher} />
          ))
        )}
      </BorderWrapper>
    );
  }
}

export default TeachersList;
