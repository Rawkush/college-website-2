import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { FlexCenter } from 'theme/Components';
import { red } from 'theme/variable';

import { NavCardFlex, NavItemFlex } from './../Shared.styles';

const Span = styled.div`
  padding: 10px 0px;
  text-align: center;
`;

const FlexCenterNav = FlexCenter.extend`
  height: 100%;
  transition: all 0.1s ease;
  &:hover {
    color: ${red};
    transform: scale(1.3);
  }
`;

export default ({ click }) => (
  <NavCardFlex>
    <NavItemFlex>
      <Link to="/studentList" onClick={click}>
        <FlexCenterNav>
          <Span>Student List</Span>
        </FlexCenterNav>
      </Link>
    </NavItemFlex>
    <NavItemFlex>
      <Link
        to="https://www.onlinesbi.com/prelogin/icollecthome.htm"
        onClick={click}
        target="_blank"
      >
        <FlexCenterNav>
          <Span>SBI Collect</Span>
        </FlexCenterNav>
      </Link>
    </NavItemFlex>
    <NavItemFlex>
      <Link to="/search" onClick={click}>
        <FlexCenterNav>
          <Span>Search Profiles</Span>
        </FlexCenterNav>
      </Link>
    </NavItemFlex>
  </NavCardFlex>
);
