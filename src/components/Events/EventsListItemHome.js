import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { Wrapper } from 'theme/Components';

const Background = styled.div`
  background: ${({ image }) => `url(${image.replace(/\\/g, '/')})`};
  display: inline-block;
  transform: ${({ active1 }) => (active1 ? 'translateX(0vw)' : 'auto')};
  transform: ${({ active2 }) =>
    active2 ? 'translateX(vw)' : 'translateX(100vw)'};
  transform: ${({ active3 }) =>
    active3 ? 'translateX(vw)' : 'translateX(200vw)'};
`;

export default ({
  name = '',
  place = '',
  date = '',
  type = '',
  photos = [],
} = {}) => (
  <Background image={`/${photos[0]}`}>
    <p>{name}</p>
    <p>{place}</p>
    <p>{moment(date).format('DD MMMM, YYYY')}</p>
    <p>{type}</p>
  </Background>
);
