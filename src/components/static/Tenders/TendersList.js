import React from 'react';
import styled from 'styled-components';

//  Styled Components
import { Wrapper, A, HR } from 'theme/Components';

const P = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
`;

export default ({ tendersArray }) => (
  <Wrapper m="30px auto 100px auto">
    {tendersArray.map(({ title, file }) => (
      <P key="title">
        {title}
        <A target="_blank" href={file}>
          Download File
        </A>
        <HR opa="0.4" w="20vw" m="20px auto" />
      </P>
    ))}
  </Wrapper>
);
