import styled from 'styled-components';

import media from 'theme/media';

const Heading = styled.h4`
  font-family: 'Noto Serif', serif;
  font-size: 23px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

const SubHeading = styled.h4`
  font-family: 'Noto Serif', serif;
  font-size: 20px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  margin: 0px;
  padding: 0px 20px;
  ${media.phone`
    margin: 20px 0px;
  `};
`;

const Text = styled.div`
  font-family: 'Alegreya Sans', serif;
  font-size: 20px;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  padding: ${({ padding = 0 }) => padding};
`;

export { Text, SubHeading, Heading };
