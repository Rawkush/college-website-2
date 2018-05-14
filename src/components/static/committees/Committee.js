import React from 'react';
import Show from './CommitteeObject';
import {
  examination,
  tpo,
  women,
  canteen,
  library,
  cultural,
  sports,
  ragging,
  labs,
  instuteSupport,
  cocurricular,
  management,
  studentWellfare,
  proctorial,
} from './CommitteesData.json';

const Examination = () => <Show data={examination} />;

const Tpo = () => <Show data={tpo} />;

const Women = () => <Show data={women} />;

const Canteen = () => <Show data={canteen} />;

const Library = () => <Show data={library} />;

const Cultural = () => <Show data={cultural} />;

const Sports = () => <Show data={sports} />;

const Ragging = () => <Show data={ragging} />;

const Labs = () => <Show data={labs} />;

const InstuteSupport = () => <Show data={instuteSupport} />;

const Cocurricular = () => <Show data={cocurricular} />;

const Management = () => <Show data={management} />;

const StudentWellfare = () => <Show data={studentWellfare} />;

const Proctorial = () => <Show data={proctorial} />;

module.exports = {
  Examination,
  Tpo,
  Women,
  Canteen,
  Library,
  Cultural,
  Sports,
  Ragging,
  Labs,
  InstuteSupport,
  Cocurricular,
  Management,
  StudentWellfare,
  Proctorial,
};
