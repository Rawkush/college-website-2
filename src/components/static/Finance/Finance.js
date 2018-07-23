import React from 'react';

import { H2ResAuto, Container, Wrapper } from 'theme/Components';

//  Components
import FinanceTable from './FinanceTable';

const financeInfo = [
  {
    title:
      'Annual Budget and Expenditure for last 05 Years(2007-08, 2008-09, 2009-10, 2010-11, 2011-12, 2012-13, 2013-14, 2014-15, 2015-16, 2016-17',
    link:
      'http://gecdelhi.ac.in/pdf_files/accounts/Annual%20Buget%20and%20Expenditure%20for%20last%2005%20years.pdf',
  },
  {
    title: 'Audit Report for the period of 2007-2009.',
    link:
      'http://gecdelhi.ac.in/pdf_files/accounts/Audit%20report%202007-09.pdf',
  },
  {
    title: 'Audit Report for the period of 2009 to 2014.',
    link:
      'http://gecdelhi.ac.in/pdf_files/accounts/Audit%20Report%202009-14.pdf',
  },
];

export default () => (
  <Container>
    <H2ResAuto>Financial Information</H2ResAuto>
    <Wrapper>
      <FinanceTable info={financeInfo} />
    </Wrapper>
  </Container>
);
