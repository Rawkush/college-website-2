import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//  Components
import StudentPhoto from './../../components/StudentDashboard/Photo';
import StudentPrimaryInfo from './../../components/StudentDashboard/PrimayInfo';
import LinksList from './../../components/StudentDashboard/LinksList';
import AccomplishmentsList from './../../components/StudentDashboard/AccomplishmentsList';

import { startRemoveAccomplishment } from './../../actions/studentSecondary';

const StudentProfilePage = ({
  student,
  accomplishments,
  deleteAccomplishment,
}) => (
  <div>
    <h2>My Profile</h2>
    {student ? (
      <div>
        <StudentPhoto {...student} />
        <StudentPrimaryInfo {...student} />
        <LinksList {...student} />
        <AccomplishmentsList
          {...accomplishments}
          edit
          deleteAccomplishment={deleteAccomplishment}
        />
        <Link to="/student/myprofile/addaccomplishment">
          Add Accomplishment
        </Link>
        <Link to="/student/myprofile/edit"> Edit Profile</Link>
      </div>
    ) : (
      <p>Loading ...</p>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  student: state.studentPrimary,
  accomplishments: state.studentSecondary,
});

const mapDispatchToProps = (dispatch) => ({
  deleteAccomplishment: (_id) => dispatch(startRemoveAccomplishment(_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfilePage);
