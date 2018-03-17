import React from 'react';
import styled from 'styled-components';
import { H3 } from 'theme/Components';
import Map from './map';
import alliedImage from 'images/college-main.jpg';


const GTK = styled.div`
  background: #F0F0F0;
  width: 100%;
  margin: 25px 0px 25px 0px;
  text-align: center;
`;

const Head = H3.extend`
  padding: 30px;
  text-align: center;
  font-family: 'Noto Serif',serif;
  font-size: 1.6rem;
  font-weight: 400;
`;

const About = styled.div`
  //  background: white;
  display: flex;
  flex: 1;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 80px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &: hover{
    box-shadow: none;
  }
  `;
const Img = styled.img`
  width: 380px;
  height: 250px;
  margin: 20px;
  &: hover{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
const Text = styled.div`
  // background: blue;
  font-weight: 300;
  font-size: 1.3rem;
  font-family: 'Alegreya Sans', serif;
  width: 250px;
  margin-left: 25px;
  text-align: center;
  padding: 10px;
  margin-top: 70px;
`;

const Text1 = Text.extend`
  margin-right: 67px;
  margin-left: 41px;
`;

const Locate = styled.h3`
`;

const GetToKnow = () => (
  <GTK>
    <Head> Get To Know </Head>
    <About>
      <Img src={alliedImage} alt="about us" />
      <div>
        <Text>
          fgdfyh gfdh gfhdgf hjf dgdf sgdfsgdf sgdf gdsfgdsfg hvh hdf hhf
          fdvgjdf hfd  fd fdu  fd f fdvghdg ghdfgh  hfdu hd hdfhh <br />
          ...see more
        </Text>
      </div>
    </About>
    <About>
      <div>
        <Locate> Locate Us </Locate>
        <Text1>
          fgdfyh gfdh gfhdgf hjf dgdf sgdfsgdf sgdf gdsfgdsfg hvh hdf hhf
          fdvgjdf hfd  fd fdu  fd  f  fdvghdg ghdfgh  hfdu hd hdf hh <br />
          ...see more
        </Text1>
      </div>
      <Img src="/" alt="location" />
    </About>
  </GTK>
);

export default GetToKnow;
