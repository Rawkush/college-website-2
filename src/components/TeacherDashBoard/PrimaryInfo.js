import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

import media from 'theme/media';

const Info = styled.p`
  font-family: 'Noto serif', serif;
`;

const Name = styled.h4`
  font-family: 'Noto Serif', serif;
  font-size: 25px;
  margin: 5px 0px;
`;

const Wrapper1 = styled.div`
  padding: 20px;
  ${media.phone`
    text-align: center;
    padding:  10px 20px;
  `};
`;

export default ({ name, dateOfBirth, currentPosition } = {}) => (
  <Wrapper1>
    <Name> {name} </Name>
    <Info> {moment(dateOfBirth).format('DD MMM, YYYY')} </Info>
    <Info> {currentPosition} </Info>
  </Wrapper1>
);
