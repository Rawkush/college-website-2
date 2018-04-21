import React from 'react';
import styled from 'styled-components';
import { H2ResAuto, Container, A } from 'theme/Components';

//  Components
import CollegeScholarship from './CollegeScholarsip';
import ScholarshipListItem from './ScholarshipListItem';

const Para = styled.p`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 20px;
`;

const Wrapper = styled.div`
  margin: 20px 0px;
`;

const links = {
  scheme: 'http://gecdelhi.ac.in/pdf_files/scholar140817(1).pdf',
};

const scholarships = [
  {
    title: '2. Post Metric Scholarship.',
    content: 'For online registration on National Scholarship Portal.',
    link: 'http://scholarships.gov.in',
  },
  {
    title: '3. EWS(Economical Weaker Section).',
    content: 'For Online Registration on IPU website.',
    link: 'http://164.100.158.135/ews/Login.aspx',
  },
  {
    title: '4. SC/ST/OBC Merit Scholarship.',
    content: 'For online Registration on e-district Portal , GNCTD.',
    link: 'http://edistrict.delhigovt.nic.in/in/en/Home/Index.html',
  },
];

const otherLinks = [
  {
    title:
      'Scholarship from AICTE for Girls Students & Differently-abled students.',
    link:
      'http://gecdelhi.ac.in/pdf_files/Cultural/Smart%20India%20Hackathon.pdf',
  },
  {
    title:
      'Schedule for personal interaction with students under EWS scheme 2016-17.',
    link: 'http://gecdelhi.ac.in/pdf_files/Academic/EWS2016-17.pdf',
  },
  {
    title: 'List of Students for Excellence Award.',
    link: 'http://gecdelhi.ac.in/pdf_files/Academic/notice06-01-2017.pdf',
  },
];

export default () => (
  <Container>
    <H2ResAuto> Scholarship </H2ResAuto>
    <Para>
      Scholarship is a boon for students, belonging to the weaker sections of
      the society, who are unable to further their education for some reason or
      the other. Scholarship is an incentive as well as encouragement for
      students, who are talented, but do not have the means to study further.
      There are a variety of scholarships – merit-based, need-based,
      student-specific, career-specific, and college-specific.
    </Para>
    <A href={links.scheme} target="_blank">
      Scholarship Schemes for students for Academic Year 2017-18.
    </A>
    <CollegeScholarship />
    {scholarships.map((scholarship) => (
      <ScholarshipListItem key={scholarship.title} {...scholarship} />
    ))}
    {otherLinks.map(({ title, link }) => (
      <Wrapper key={title}>
        <A href={link} target="_blank">
          {title}
        </A>
        <br />
      </Wrapper>
    ))}
  </Container>
);
