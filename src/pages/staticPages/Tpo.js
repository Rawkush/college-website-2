import React from 'react';
import { Page } from 'theme/Components';

import {
  TeacherData,
  TopData,
  CodinaterData,
  Placement,
} from './../../components/static/Tpo/TpoData';

export default () => (
  <Page>
    <TopData />
    <TeacherData />
    <CodinaterData />
    <Placement />
  </Page>
);
