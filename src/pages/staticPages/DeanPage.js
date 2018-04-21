import React, {Component} from 'react';
import styled from 'styled-components';
import media from './../../theme/media';

import DeanData from './../../Components/static/dean/DeanData';
import photo from './../../components/static/dean/dean.png';

const Background = styled.div`
  background: #f1f1f1;
  padding: 10px 0px;
`;

const Container = styled.div` 
  width: 90%;
  max-width: 1170px;
  margin-top: 130px;
  margin-bottom: 20px;
  ${media.phone`
    width: 95%;
  `};
`;

const Wrapper1 = styled.div`
  min-width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0px;
  border-radius: 10%;
  &:hover {
    > img {
      box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.35);
    }
  }
`;

const P = styled.p`
  font-family: 'Satisfy', sans-serif;
  font-size: 25px;
  margin-bottom: 0px;
  text-align: center;
`;

const P2 = styled.p`
  font-family: 'open Sans', sans-serif;
  font-size: 18px;
  text-align: center;
`;
const P1 = styled.p`
  font-family: 'Satisfy', sans-serif;
  font-size: 18px;
  margin: 20px;
`;

const Paras = styled.div`
  margin-left: 50px;
  width: 100%;
  ${media.phone`
width: 95%;
margin-left: 25px;
`};
`;

export default class DData extends Component {
  render() {
    return (
      <Background>
        <Container>
        <P> {DeanData.dean.Name} </P>
        <P2>  {DeanData.dean.desingnation} </P2>
        <Wrapper1 >
          <img src={photo}  alt="deancbpgec"/> 
        </Wrapper1>
        <Paras>
        <P1 style={{fontWeight:600, fontSize:20}} > {DeanData.dean.Addressing} </P1>
        <P1> {DeanData.dean.para1} </P1>
        <P1> {DeanData.dean.para2} </P1>
        <P1> {DeanData.dean.para3} </P1>
         <P1> {DeanData.dean.para4} </P1>
         <P1> {DeanData.dean.para5} </P1>
         <P1> {DeanData.dean.para6} </P1>
         <P1> {DeanData.dean.para7} </P1>
         <P1> {DeanData.dean.quote} </P1>
         </Paras>
         </Container>
     </Background>  
    )
}
};