import React from 'react';
import styled from 'styled-components';

import { HR } from 'theme/Components';

const H3 = styled.h3`
font-size: 16px;
font-family: 'Noto Serif', serif;
font-weight: 600;
`;

const H4 = styled.h4`
font-size: 16px;
font-family: 'Noto Serif', serif;
font-weight:600;
`;

const F = styled.p`
font-size: 14Fx;
font-family: 'Noto Serif', serif;
font-weight: 400;
`

export default({head,staff,contact,email})=>(
    <div>
        <br />
        <F> <H3>Head:</H3>  {head} </F>
        <F> <H4> Staff:</H4> {staff.map((item)=><F> {item}</F>)} </F>
        <F> <H4>contact: </H4> {contact} </F>
        <F><H4>Email: </H4>  {email} </F>
        </div>
)