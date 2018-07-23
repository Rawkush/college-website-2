import React from 'react';
import styled from 'styled-components';
import {
  Container,
  H2ResAuto,
  FlexResponsiveStack as Flex,
} from 'theme/Components';
import media from 'theme/media';
import arvindImage from './../../../assets/images/arvind.png';

const Para1 = styled.p`
  text-align: left;
  font-family: 'Noto Serif', serif;
  font-size: 16px;
  font-weight: 600;
  ${media.phone`
    text-align: center;
  `};
`;

const Para2 = styled.p`
  text-align: left;
  font-family: 'Alegreya Sans', serif;
  font-size: 20px;
  ${media.phone`
    text-align: center;
  `};
`;

const FlexItemRigth = styled.div`
  flex: 3;
`;

const FlexItemLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  height: 250px;
  ${media.phone`
    height: 200px;
  `};
  width: auto;
  text-align: center;
`;

const para = [
  'The product “Smart Lights” is a logical solution of controlling traffic on busy intersections automatically on the basis of traffic density on a particular stretch of road. currently the traffic signals work at a preset time at which each signal is turned green to let the traffic go by and red to stop the traffic flow.',
  'The inherent flaw with this work principle is that it doesn’t consider the amount of traffic on a given stretch of road leading to traffic jams and wastage of fuel and essential manhours which can be otherwise utilized in productive work.',
  'The system works on the base of counting and analyzing the amount of traffic flowing through a section of road by means of load cell sensor connected to raspberry pi micro-computer containing the necessary logic required. The traffic signals are then operated on the basis of the number of vehicles thus ensuring in hassle free traffic management.',
  'It is a raspberry pi based device designed primarily for use in automation of a cities traffic control at busy intersections. This device is based on the logic of detecting flow & density of traffic passing through a stretch of road. The hardware used in this project is minimal so as to allow economical & efficient implementation of this independent device to control the device.',
  'The system works on the logic of counting the number of vehicles passing through 4 different roads meeting at an intersection and comparing the amount of traffic at each of the road. The count is done by the use of a load cell sensor embedded in the road surface providing the input to the microcomputer raspberry pi which decides on the basis of the input received from other sensors. Short-term congestion caused due to traffic incidents or other road environment factors significantly reduces traffic flow capacity of a link which forms a major part of travel time delays.',
  'Accurate and reliable estimate of real-time traffic state is essential for optimizing network performance during unpredictable events. Inaccurate estimate of current traffic state produces unreliable travel-time estimations which lead to ineffective traffic management strategies during traffic incident.',
];

export default () => (
  <Container>
    <H2ResAuto>Shining Star</H2ResAuto>
    <Flex>
      <FlexItemLeft>
        <Image src={arvindImage} />
      </FlexItemLeft>
      <FlexItemRigth>
        <Para1>
          Arvind Sharma, Student of B.Tech (IT) Final Year got IInd Position out
          of 20 participating teams in Inter College Major Project Competetion
          held by GGSIPU.
        </Para1>
        {para.map((paragraph) => <Para2>{paragraph}</Para2>)}
      </FlexItemRigth>
    </Flex>
  </Container>
);
