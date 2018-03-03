import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { red } from 'theme/variable';
import { Flex } from 'theme/Components';
import RightArrowSVG from './RightArrow';

const SVGArrow = styled.svg`
  height: 25px;
  width: auto;
`;

const ComponentBox = styled.div`
  border: solid 1px ${red};
  border-radius: 3px;
  padding: 40px;
  margin-bottom: 30px;
`;

const FlexLink = Flex.extend`
  align-items: center;
  > svg {
    margin-left: 5px;
    transition: all 0.2s ease;
    > line {
      stroke: ${red};
    }
    > polyline {
      stroke: ${red};
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${red};
  display: inline-block;
  &:hover {
    > div {
      > svg {
        transform: translateX(5px);
      }
    }
  }
  font-family: 'Noto Serif', sans-serif;
`;

const LinkWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ p }) => p || '0px'};
`;

const LinkDB = ({ text, p, to }) => (
  <LinkWrap p={p}>
    <StyledLink to={to}>
      <FlexLink>
        {text} <RightArrowSVG />
      </FlexLink>
    </StyledLink>
  </LinkWrap>
);

export { SVGArrow, ComponentBox, LinkDB };
