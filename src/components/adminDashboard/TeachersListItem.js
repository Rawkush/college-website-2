import React from 'react';
import styled from 'styled-components';

// Default Styled Components
import { H4, HR, Button, Flex } from 'theme/Components';

const Email = styled.p`
  font-family: 'Open Sans', sans-serif;
  margin: 7px 0px;
`;

export default ({ name, email = 'N/A', removeHandler, _id } = {}) => (
  <div>
    <H4>{name}</H4>
    <Email>{email}</Email>
    <Flex end>
      <Button
        onClick={() => {
          removeHandler(_id);
        }}
        w="100px"
      >
        Delete Profile
      </Button>
    </Flex>
    <HR w="25vw" m="10px auto" />
  </div>
);
