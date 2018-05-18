import React from 'react';
import styled from 'styled-components';

//  Styled Components
import {
  Container,
  Wrapper,
  FlexResponsiveStack as FlexRes,
  H3,
} from 'theme/Components';
import media from 'theme/media';

//  Assets
import image from 'assets/images/college-image-sample.jpeg';

const desc = [
  'The Department of Training and Technical Education, Govt. of Delhi, in its mission to promote and establish centre of excellence in form of Institutes has added Ch.B.P.Government Engineering College at Jaffarpur, Delhi, from academic session 2007-08. This College has commenced academic programmes in B.Tech. (Civil Engineering & Information Technology Engineering) from academic session 2007-08 and B.Tech. (Environmental Engineering) from academic session 2008-09. ',
  'The aim of the Govt. of Delhi is to develop this college as centre of excellence in Civil and Environmental Engineering and related fields.',
  'The future extension of the college has to be planned keeping in view the needs of relevant human resource in these areas of engineering & technology, related sciences and other disciplines and their applications for building Civil and Environmental Engineering infrastructure for the development of society & nation. The college also encourages investigation and research in pursuit of excellence in the field of related sciences & engineering.',
  'The First batch of B.Tech IT & Civil Engineering passed out in the year 2011. The placement of the college was excellent, log on to placement link for more details.',
];

const Image = styled.img`
  background: url(${({ img }) => img}) center center;
  background-size: cover;
  flex: 1;
  height: 400px;
  ${media.phone`
    width: 100%;
    height: 300px;
  `};
`;

const WrapperMod = Wrapper.extend`
  flex: 1;
  padding: 0 20px;
  text-align: center;
  ${media.phone`
    padding: 0px;
  `};
`;

const FlexResMod = FlexRes.extend`
  justify-content: center;
  align-items: center;
`;

const Description = ({ data, img }) => () => (
  <Container>
    <FlexResMod>
      <Image img={img} />
      <WrapperMod>
        <H3 center margin="20px 0px 0px 0px">
          A Litle Bit Of History
        </H3>
        {data.map((para) => <p key={para.slice(0, 10)}>{para}</p>)}
      </WrapperMod>
    </FlexResMod>
  </Container>
);

export default Description({ data: desc, img: image });
