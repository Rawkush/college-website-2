import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { NavCardFlex, NavItemFlex } from './../Shared.styles';
import { FlexCenter } from 'theme/Components';
import { red } from 'theme/variable';

const Span = styled.div`
  padding: 10px 0px;
  text-align: center;
`;

const FlexCenterNav = FlexCenter.extend`
  height: 100%;
  transition: all 0.1s ease;
  &: hover {
    color: ${red};
    transform: scale(1.3);
  }
`;

export default () => (
  <NavCardFlex>
    <NavItemFlex>
      <Link to="/studentList">
        <FlexCenterNav>
          <Span>Student List</Span>
        </FlexCenterNav>
      </Link>
    </NavItemFlex>
    <NavItemFlex>
      <Link to="/someexternallink">
        <FlexCenterNav>
          <Span>SBI Collect</Span>
        </FlexCenterNav>
      </Link>
    </NavItemFlex>
  </NavCardFlex>
);
