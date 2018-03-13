import React from 'react';
import styled from 'styled-components';

import media from 'theme/media';

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  box-shadow: 1px 5px 1px #00000073;
  ${media.phone`
    height: 150px;
    width: 150px;
  `};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default ({ photo = '', clickHandler = () => {} } = {}) => (
  <Wrapper>
    <Image onClick={clickHandler} src={`/${photo}`} alt="Student" />
  </Wrapper>
);
