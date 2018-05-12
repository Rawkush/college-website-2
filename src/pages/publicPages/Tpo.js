import React from 'react';
import { Page } from 'theme/Components';

import {
  TeacherData,
  TopData,
  CodinaterData,
  Placement,
} from './../../components/static/Tpo/Tpo';

export default () => (
  <Page>
    <TopData />
    <TeacherData />
    <CodinaterData />
    <Placement />
  </Page>
);
