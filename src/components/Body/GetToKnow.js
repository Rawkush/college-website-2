import React from 'react';
import styled from 'styled-components';
import { H3 } from 'theme/Components';
import Map from './map';

const GTK = styled.div`
  background: #F0F0F0;
  width: 100%;
  margin: 25px 0px 25px 0px;
  text-align: center;
`;

const Head = H3.extend`
  padding: 30px;
`;

const About = styled.div`
  background: white;
  display: flex;
  flex: 1;
  width: 75%;
  margin: 0 auto;
  margin-bottom: 80px;
`;
const Img = styled.img`
  width: 380px;
  height: 150px;
  padding: 20px;
  border: solid black;
`;
const Text = styled.div`
  // background: blue;
  font-family: 'Alegreya Sans', serif;
  width: 200px;
  margin-left: 25px;
  text-align: center;
  padding: 10px;
  margin-top: 40px;
`;

const Text1 = Text.extend`
  margin-right: 67px;
  margin-left: 41px;
`;

const Locate = styled.h3`
`;

const GetToKnow = () => (
  <GTK>
    <Head> GET TO KNOW </Head>
    <About>
      <Img src="a.PNG" alt="about us" />
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
