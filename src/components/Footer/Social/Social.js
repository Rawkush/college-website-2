import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

//  Styled-default Components
import { Container, Flex } from 'theme/Components';

// Icons SVG
// import { FBIconSVG, TwitterIconSvg, IGIconSVG } from './IconSvg';

const Background = styled.div`
  background: #0e0e0e;
`;

const P = styled.p`
  margin: 0;
  color: #a9a9a9;
  text-align: center;
  font-family: 'Alegreya Sans', sans-serif;
  padding: 10px 0px;
`;

const FlexCont = Flex.extend`
  max-width: 500px;
  margin: 0 auto;
  color: white;
`;

export default () => (
  <Background>
    <Container>
      {/* <FlexCont>
        { <TwitterIconSvg />
        <FBIconSVG />
        <IGIconSVG /> }
      </FlexCont> */}
      <P>All rights reserved by CBPGEC @{moment().format('YYYY')}.</P>
    </Container>
  </Background>
);
