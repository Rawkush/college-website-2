import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// components
import TeacherPhoto from './../../components/TeacherDashboard/Photo';
import WorkList from './../../components/TeacherDashboard/WorkList';
import TechnicalList from './../../components/TeacherDashboard/TechnicalList';
import CommitteList from './../../components/TeacherDashboard/CommitteList';
import SpecialisationList from './../../components/TeacherDashboard/SpecialistionList';

const TeacherProfilePage = ({ teacher, secondary }) => (
  <div>
    <h2> myProfile </h2>
    {teacher ? (
      <div>
        <TeacherPhoto {...teacher} />
        <WorkList {...secondary} edit />
        <TechnicalList {...secondary} edit />
        <CommitteList {...secondary} edit />
        <SpecialisationList {...secondary} />
        <Link to="/teacher/myprofile/addwork">Add Work </Link>
        <Link to="/teacher/myprofile/addtechnicalskill">Add Tech</Link>
        <Link to="/teacher/myprofile/addcommitte">Add Committe </Link>
        <Link to="/teacher/myprofile/updatespecialisation">
          Add Specialisation
        </Link>
      </div>
    ) : (
      <p> Loading ...... </p>
    )}
  </div>
);

const mapStateToProps = (state) => ({
  teacher: state.teacherPrimary,
  secondary: state.teacherSecondary,
});

export default connect(mapStateToProps)(TeacherProfilePage);
// all the pages needs to be imported here and displayed this just for routing;
