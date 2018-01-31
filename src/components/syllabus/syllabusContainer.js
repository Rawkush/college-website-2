import React from 'react';

import SyllabusListItem from './syllabusListItem';

const syllabusArray = [
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 1,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'theory',
    file: 'http://google.co.in',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 1,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'practical',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 2,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'theory',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 2,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'practical',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 3,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'theory',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 3,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'practical',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 4,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'theory',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 4,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'practical',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 5,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'theory',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 5,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'practical',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 6,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'theory',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 6,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'practical',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 7,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'theory',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 7,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'practical',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 8,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'theory',
  },
  {
    branch: 'I.T.',
    codeNo: 'ETMA-201',
    semester: 8,
    subject: 'Applied Mathematics',
    l: 2,
    tp: 4,
    credits: 3,
    status: 'M',
    period: 'new',
    type: 'practical',
  },
];

const Syllabus = () => {
  const syllSem1 = syllabusArray.filter((item) => item.semester === 1);
  const syllSem2 = syllabusArray.filter((item) => item.semester === 2);
  const syllSem3 = syllabusArray.filter((item) => item.semester === 3);
  const syllSem4 = syllabusArray.filter((item) => item.semester === 4);
  const syllSem5 = syllabusArray.filter((item) => item.semester === 5);
  const syllSem6 = syllabusArray.filter((item) => item.semester === 6);
  const syllSem7 = syllabusArray.filter((item) => item.semester === 7);
  const syllSem8 = syllabusArray.filter((item) => item.semester === 8);
  return (
    <div>
      <hr />
      <h2> Semester I</h2>
      <SyllabusListItem syllabus={syllSem1} />
      <hr />
      <h2> Semester II</h2>
      <SyllabusListItem syllabus={syllSem2} />
      <hr />
      <h2> Semester III</h2>
      <SyllabusListItem syllabus={syllSem3} />
      <hr />
      <h2> Semester VI</h2>
      <SyllabusListItem syllabus={syllSem4} />
      <hr />
      <h2> Semester V</h2>
      <SyllabusListItem syllabus={syllSem5} />
      <hr />
      <h2> Semester VI</h2>
      <SyllabusListItem syllabus={syllSem6} />
      <hr />
      <h2> Semester VII</h2>
      <SyllabusListItem syllabus={syllSem7} />
      <hr />
      <h2> Semester VIII</h2>
      <SyllabusListItem syllabus={syllSem8} />
    </div>
  );
};

export default Syllabus;
