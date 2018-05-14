import React from 'react';
import { Page, H2ResAuto } from 'theme/Components';
import {
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
} from './../../components/static/committees/Committee';

export default () => (
  <Page>
    <H2ResAuto> Committees</H2ResAuto>
    <Examination />
    <Tpo />
    <Women />
    <Canteen />
    <Library />
    <Cultural />
    <Sports />
    <Ragging />
    <Labs />
    <InstuteSupport />
    <Management />
    <Cocurricular />
    <StudentWellfare />
    <Proctorial />
    <br />
    <br />
  </Page>
);
