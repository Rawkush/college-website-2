import React from 'react';
import styled from 'styled-components';

import { red } from 'theme/variable';
import QuestionBankIcon from './Icons/QuestionBankIcon';
import ScholarshipIcon from './Icons/Scholarship';

import {
  NavCardFlex,
  NavItemFlex,
  StyledLink,
  StyledA,
} from './../Shared.styles';

const Span = styled.div`
  padding: 10px 0px;
  text-align: center;
`;

const HoverDiv = styled.div`
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${red};
    > svg {
      transform: scale(1.1);
      transform: translateY(-3px);
      box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default ({ click }) => (
  <NavCardFlex mTop="16px">
    <NavItemFlex>
      <StyledLink to="/scholarships" onClick={click}>
        <HoverDiv>
          <ScholarshipIcon />
          <Span>Scholarships</Span>
        </HoverDiv>
      </StyledLink>
    </NavItemFlex>
    <NavItemFlex>
      <StyledA
        href="https://www.vidyalakshmi.co.in/Students/"
        onClick={click}
        target="_blank"
      >
        <HoverDiv>
          <QuestionBankIcon />
          <Span>Question Bank</Span>
        </HoverDiv>
      </StyledA>
    </NavItemFlex>
  </NavCardFlex>
);
