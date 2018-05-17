import React from 'react';
import styled from 'styled-components';
import TabelItem from './AcademicsTabelItem'

export default ({data=[]}={})=>(
    <div>
        {/* {data.map((item) => <P>{item} </P>)} */}

    {data.map((item) => <TabelItem key={item.name} {...item} />)}
    </div>
);