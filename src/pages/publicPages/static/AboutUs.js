import React from 'react';

//  Import styled components
import { Page, H2ResAuto } from 'theme/Components';

//  Components
import Description from 'components/aboutUs/DescriptionBody';
import PrincipalMessage from 'components/aboutUs/Principal';
import Courses from 'components/aboutUs/Courses';
import Location from 'components/aboutUs/Location';
import Admission from 'components/aboutUs/Admission';

export default () => (
  <Page>
    <H2ResAuto>About Us</H2ResAuto>
    <Description />
    <PrincipalMessage />
    <Courses />
    <Location />
    <Admission />
  </Page>
);
