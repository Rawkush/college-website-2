import React from 'react';
import { H3, ButtonLink, AlignCenter, Flex, H4 } from 'theme/Components';
import styled from 'styled-components';
import { ComponentBox, LinkDB } from './Shared.styles';

const Wrapper1 = styled.div`
  flex: 1;
`;

export default () => (
  <ComponentBox>
    <H3 center>Syllabus</H3>
    <Flex>
      <Wrapper1>
        <H4 center>New</H4>
        <LinkDB text="I.T" to="/syllabus/new/it" p="10px" />
        <LinkDB text="Civil" to="/syllabus/new/civil" p="10px" />
        <LinkDB text="Env" to="/syllabus/new/env" p="10px" />
      </Wrapper1>
      <Wrapper1>
        <H4 center>Old</H4>
        <LinkDB text="I.T" to="/syllabus/old/it" p="10px" />
        <LinkDB text="Civil" to="/syllabus/old/civil" p="10px" />
        <LinkDB text="Env" to="/syllabus/old/env" p="10px" />
      </Wrapper1>
    </Flex>
    <AlignCenter>
      <ButtonLink m="10px" to="/admin/syllabus/add">
        Add Syllabus
      </ButtonLink>
    </AlignCenter>
  </ComponentBox>
);
