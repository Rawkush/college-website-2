import React from 'react';
import styled from 'styled-components';

import { A } from 'theme/Components';

const Heading = styled.h4`
  font-family: 'Noto Serif', serif;
  font-size: 23px;
  font-weight: 600;
`;

const SubHeading = styled.h5`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 5px;
`;

const Content = styled.p`
  font-size: 17px;
  font-family: 'Alegreya Sans', sans-serif;
  margin-left: 60px;
`;

export default () => (
  <div>
    <Heading>1. College Scholarship.</Heading>
    <SubHeading>a. Merit Scholarship.</SubHeading>
    <Content>
      Merit Scholarship will be provided to all students securing 80% and above
      marks in previous exam. <A>Application form.</A>
    </Content>
    <SubHeading>b. Merit-Cum-Means Scholarship.</SubHeading>
    <Content>
      Merit-cum-Means Scolarship will be provided to all students securing 70%
      and above marks with annual Family/Parental income upto Rs. 2.00 lakhs,
      duly supported by Affidavit or income certificate, countersigned/issued by
      concerned SDM office. <A>Application form.</A>
    </Content>
  </div>
);
