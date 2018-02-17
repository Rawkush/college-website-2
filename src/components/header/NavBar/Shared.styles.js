import { Flex, FlexItem } from './../../../theme/Components';
import media from './../../../theme/media';

const NavCardFlex = Flex.extend`
  flex-direction: column;
  flex: 1;
  min-height: 200px;
  ${media.phone`
    min-height: 30px;
  `};
`;

const NavItemFlex = FlexItem.extend`
  padding: 10px 0px;
  font-family: 'Alegreya Sans', sans-serif;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`;

const NavItemFlexHeading = FlexItem.extend`
  padding: 15px 0px;
  font-family: 'Alegreya Sans', sans-serif;
`;

const NavItemFlexSubHeading = FlexItem.extend`
  padding: 15px 0px;
  font-family: 'Alegreya Sans', sans-serif;
`;

const FlexHorizontal = Flex.extend`
  flex-direction: row;
`;

export {
  NavCardFlex,
  NavItemFlex,
  NavItemFlexHeading,
  NavItemFlexSubHeading,
  FlexHorizontal,
};
