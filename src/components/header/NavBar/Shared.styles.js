//  Global Imports
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//  Styled Imports
import { Flex, FlexItem } from 'theme/Components';
import media from 'theme/media';
import { lightBlack, red } from 'theme/variable';

const NavCardFlex = Flex.extend`
  flex-direction: column;
  flex: 1;
  min-height: 200px;
  padding: 10px 0;
  margin-top: ${({ mTop }) => mTop || 0};
  ${media.phone`
    min-height: 30px;
    padding: 20px;
  `};
`;

const NavItemFlex = FlexItem.extend`
  padding: 10px 0px;
  font-family: 'Alegreya Sans', sans-serif;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  > a {
    text-decoration: none;
    color: ${lightBlack};
  }
`;

const NavItemFlexHeading = FlexItem.extend`
  padding: 15px 0px;
  font-family: 'Alegreya Sans', sans-serif;
  flex: 1;
  font-weight: bold;
`;

const NavItemFlexSubHeading = FlexItem.extend`
  font-family: 'Alegreya Sans', sans-serif;
  flex: 1;
  align-content: center;
  ${media.phone`
    padding: 10px;
  `};
`;

const FlexHorizontal = Flex.extend`
  flex: 1;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  color: ${lightBlack};
  text-decoration: none;
  &:hover {
    color: ${red};
  }
`;

const VerticalLine = styled.div`
  display: inline-block;
  height: 235px;
  width: 1px;
  background-color: #00000029;
  position: relative;
  top: 63px;
  ${media.phone`
    height: 1px;
    width: 80%;
    top: 5px;
    margin: 0 auto;
  `};
`;

const SVG = styled.svg`
  background: ${({ bg }) => bg || 'auto'};
  border-radius: 50%;
  height: 42px;
  width: auto;
  transition: all 0.1s ease;
  ${media.phone`
    height: 40px;
  `};
`;

export {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
  NavItemFlexSubHeading,
  FlexHorizontal,
  StyledLink,
  VerticalLine,
  SVG,
};
