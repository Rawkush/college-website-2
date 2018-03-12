import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import media from 'theme/media';
import { lightBlack, red } from 'theme/variable';
import itImage from 'images/it.jpg';
import civilImage from 'images/civil.jpg';
import envImage from 'images/env.jpg';
import appliedImage from 'images/applied.jpg';
import alliedImage from 'images/allied.png';

import {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
  StyledLink,
} from './../Shared.styles';

import { FlexCenter } from 'theme/Components';

const NavItemFlexResponsive = NavItemFlex.extend`
  display: flex;
  &:hover {
    > img {
      transform: scale(1.1);
      transform: translateY(-3px);
      box-shadow: 4px 3px 9px #00000075;
    }
  }
  ${media.phone`
    text-align: left;
    padding-left: 50px;
  `};

  padding: 4px;
`;

const DepartmentImage = styled.img`
  border-radius: 50%;
  height: 42px;
  width: auto;
  transition: all 0.1s ease;
  ${media.phone`
    height: 40px;
  `};
`;

const NavFlexCenter = FlexCenter.extend`
  justify-content: left;
  padding-left: 25px;
`;

export default ({ click }) => (
  <NavCardFlex>
    <NavItemFlexHeading>Departments</NavItemFlexHeading>
    <StyledLink to="/department/it" onClick={click}>
      <NavItemFlexResponsive>
        <DepartmentImage src={itImage} alt="information technology icon" />
        <NavFlexCenter>Information Techonology</NavFlexCenter>
      </NavItemFlexResponsive>
    </StyledLink>
    <StyledLink to="/department/civil" onClick={click}>
      <NavItemFlexResponsive>
        <DepartmentImage src={civilImage} alt="civil icon" />
        <NavFlexCenter>Civil Engineering</NavFlexCenter>
      </NavItemFlexResponsive>
    </StyledLink>
    <StyledLink to="/department/env" onClick={click}>
      <NavItemFlexResponsive>
        <DepartmentImage src={envImage} alt="environment icon" />
        <NavFlexCenter>Environment</NavFlexCenter>
      </NavItemFlexResponsive>
    </StyledLink>
    <StyledLink to="/department/allied" onClick={click}>
      <NavItemFlexResponsive>
        <DepartmentImage src={alliedImage} alt="allied icon" />
        <NavFlexCenter>Allied</NavFlexCenter>
      </NavItemFlexResponsive>
    </StyledLink>
    <StyledLink to="/department/apploed" onClick={click}>
      <NavItemFlexResponsive>
        <DepartmentImage src={appliedImage} alt="apllied icon" />
        <NavFlexCenter>Applied Science and Humanities</NavFlexCenter>
      </NavItemFlexResponsive>
    </StyledLink>
  </NavCardFlex>
);
