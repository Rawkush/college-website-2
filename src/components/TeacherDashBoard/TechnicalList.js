import React from 'react';
import styled from 'styled-components';

import { ButtonLink, HR } from 'theme/Components';
import media from 'theme/media';

const Title = styled.h4`
  margin: 50px 0px;
  font-size: 30px;
  font-family: 'Noto Serif', serif;
  text-align: center;
`;

const WrapperEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  ${media.phone`
    justify-content: ${({ center }) => (center ? 'center' : 'flex-end')};
  `};
`;

const Item = styled.p`
  font-family: 'Open Sans', sans-serif;
  padding: 20px 0px;
  display: block;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  word-wrap: break-word;
  hyphens: auto;
`;

export default ({ technicalSkills }) => (
  <div>
    {technicalSkills ? (
      <div>
        <Title>TechnicalSkills</Title>
        {technicalSkills.map((technicalSkill) => (
          <Item key={technicalSkill}>{technicalSkill}</Item>
        ))}
      </div>
    ) : (
      <p>Loading...</p>
    )}
    <WrapperEnd>
      <ButtonLink to="/teacher/addtechnicalskill">Update</ButtonLink>
    </WrapperEnd>
    <HR />
  </div>
);
