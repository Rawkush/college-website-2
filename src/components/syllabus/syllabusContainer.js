import React from 'react';
import { connect } from 'react-redux';

// Components
import SyllabusListItem from './SyllabusListItem';

const Syllabus = ({ syllabusArray, match, auth }) => {
  const { sub, period } = match.params;
  const syllabusFilter = syllabusArray.filter((item) => item.period === period);

  const syllSem1 = syllabusFilter.filter(
    (item) => item.semester === 1 && item.branch === sub
  );
  const syllSem2 = syllabusFilter.filter(
    (item) => item.semester === 2 && item.branch === sub
  );
  const syllSem3 = syllabusFilter.filter(
    (item) => item.semester === 3 && item.branch === sub
  );
  const syllSem4 = syllabusFilter.filter(
    (item) => item.semester === 4 && item.branch === sub
  );
  const syllSem5 = syllabusFilter.filter(
    (item) => item.semester === 5 && item.branch === sub
  );
  const syllSem6 = syllabusFilter.filter(
    (item) => item.semester === 6 && item.branch === sub
  );
  const syllSem7 = syllabusFilter.filter(
    (item) => item.semester === 7 && item.branch === sub
  );
  const syllSem8 = syllabusFilter.filter(
    (item) => item.semester === 8 && item.branch === sub
  );
  return (
    <div>
      <hr />
      <h2> Semester I</h2>
      <SyllabusListItem syllabus={syllSem1} auth={auth} />
      <hr />
      <h2> Semester II</h2>
      <SyllabusListItem syllabus={syllSem2} auth={auth} />
      <hr />
      <h2> Semester III</h2>
      <SyllabusListItem syllabus={syllSem3} auth={auth} />
      <hr />
      <h2> Semester VI</h2>
      <SyllabusListItem syllabus={syllSem4} auth={auth} />
      <hr />
      <h2> Semester V</h2>
      <SyllabusListItem syllabus={syllSem5} auth={auth} />
      <hr />
      <h2> Semester VI</h2>
      <SyllabusListItem syllabus={syllSem6} auth={auth} />
      <hr />
      <h2> Semester VII</h2>
      <SyllabusListItem syllabus={syllSem7} auth={auth} />
      <hr />
      <h2> Semester VIII</h2>
      <SyllabusListItem syllabus={syllSem8} auth={auth} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  syllabusArray: state.syllabus,
  auth: state.auth.admin,
});

export default connect(mapStateToProps)(Syllabus);
