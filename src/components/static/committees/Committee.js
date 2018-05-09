import React from 'react';
import { H2ResAuto, Container, Wrapper } from 'theme/Components';
import styled from 'styled-components';

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
} from './CommitteesData';

import { ExaminationBody } from './CommitteesTabel';

const CName = styled.p`
  font-size: 15px;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  padding: 10px;
  font-weight: 600;
`;

const Examination = () => (
  <Container>
    <H2ResAuto> Examination Committee</H2ResAuto>
    <Wrapper>
      <CName> Examination Committee </CName>
      <ExaminationBody info={examination} />
    </Wrapper>
  </Container>
);

const Tpo = () => (
  <Container>
    <Wrapper>
      <CName>
        Training, Placement and Students Personality Development Committee
      </CName>
      <ExaminationBody info={tpo} />
    </Wrapper>
  </Container>
);

const Women = () => (
  <Container>
    <Wrapper>
      <CName> Women Grivance Cell ( Internal Complaints Committee) </CName>
      <ExaminationBody info={women} />
    </Wrapper>
  </Container>
);

const Canteen = () => (
  <Container>
    <Wrapper>
      <CName> Canteen Development, Security & Transport Committee </CName>
      <ExaminationBody info={canteen} />
    </Wrapper>
  </Container>
);

const Library = () => (
  <Container>
    <Wrapper>
      <CName>Library Committee</CName>
      <ExaminationBody info={library} />
    </Wrapper>
  </Container>
);

const Cultural = () => (
  <Container>
    <Wrapper>
      <CName> Cultural Committee </CName>
      <ExaminationBody info={cultural} />
    </Wrapper>
  </Container>
);
const Sports = () => (
  <Container>
    <Wrapper>
      <CName>Sports Committee </CName>
      <ExaminationBody info={sports} />
    </Wrapper>
  </Container>
);

const Ragging = () => (
  <Container>
    <Wrapper>
      <CName>Anti Ragging Committee </CName>
      <ExaminationBody info={ragging} />
    </Wrapper>
  </Container>
);

const Labs = () => (
  <Container>
    <Wrapper>
      <CName>
        Committee for Ímprovement in Labs, Workshops & Computer Centre
      </CName>
      <ExaminationBody info={labs} />
    </Wrapper>
  </Container>
);

const InstuteSupport = () => (
  <Container>
    <Wrapper>
      <CName>
        Committee for Institutional Support for Faculty Development & End Term
        Evaluation
      </CName>
      <ExaminationBody info={instuteSupport} />
    </Wrapper>
  </Container>
);

const Cocurricular = () => (
  <Container>
    <Wrapper>
      <CName>
        Committee for Co-curricular Activities and Institutional Publication
      </CName>
      <ExaminationBody info={cocurricular} />
    </Wrapper>
  </Container>
);

const Management = () => (
  <Container>
    <Wrapper>
      <CName> Commitee for Facility Management & FeedbackAssessment </CName>
      <ExaminationBody info={management} />
    </Wrapper>
  </Container>
);

const StudentWellfare = () => (
  <Container>
    <Wrapper>
      <CName>
        Students Welfare Committee (including Scholarship & Excellence in
        Academic Performance)
      </CName>
      <ExaminationBody info={studentWellfare} />
    </Wrapper>
  </Container>
);

const Proctorial = () => (
  <Container>
    <Wrapper>
      <CName>Proctorial Committee </CName>
      <ExaminationBody info={proctorial} />
    </Wrapper>
  </Container>
);

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
