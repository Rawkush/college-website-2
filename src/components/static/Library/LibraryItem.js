import React from 'react';
import { Container, Wrapper } from 'theme/Components';
import styled from 'styled-components';

import Sheet from './LibrarySheet';
 
const Wrap = Wrapper.extend`
max-width: 65%;
`
const CName = styled.p`
font-size: 17px;
font-weight: 500;

`;

export default ({ name = '', data = [] } = {}) => (
<Container>
    <Wrap>
        <CName> {name}</CName>
        <Sheet data={data}  />
        </Wrap>
    </Container>

);