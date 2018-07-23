import React from 'react';
import styled from 'styled-components';
import { Wrapper } from 'theme/Components';

const Para = styled.p`
  margin: 10px 0px;
`;

const Designation = styled.h4`
  margin: 5px 0px;
  font-family: 'Satisfy';
  font-size: 20px;
`;

const Text = styled.div`
  margin: ${({ margin }) => margin || '0px'};
`;

export default ({
  para = [],
  designation = '',
  institution = '',
  place = '',
} = {}) => (
  <Wrapper w="900px" m="50px auto 0px">
    {para.map((paragraph) => <Para>{paragraph}</Para>)}
    <Text margin="20px 0px 0px 0px">Order By -</Text>
    <Designation>{designation}</Designation>
    <Text margin="10px 0px 0px 0px">{institution}</Text>
    <Text margin="10px 0px 0px 0px">{place}</Text>
  </Wrapper>
);
