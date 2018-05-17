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
import image from 'assets/images/principal.jpg';

const desc = [
  'At the very onset, I am prompted to use a John Dewey\'s quote: "Education is not preparation for life; education is life itself".',
  'It is a matter of pride and immense pleasure that destiny has given me the opportunity to join CBPGEC family as its head. I take this opportunity to welcome new students choosing this college for their higher education in various programmes.',
  'A popular adage I hear and I forget, I see and I remember, I do and I understand, isvery pertinent for Higher Technical Education System, so that students are able to imbibe theoretical concepts by performing related practicals. It is the education of our students heads, hearts and hands that will genuinely prepare them for success in college, career and civic life, I can say this with full confidence that the college would provide every student a much expected opportunity of boundless growth through an integrated structure of curricular, co-curricular and extracurricular activities.',
  'Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime. Hence learning skills along with knowledge will enable our students not only to be seekers, but also job creators and emerge as global leaders in the area of technical education commensurate with the dynamic global scenario for the benefit of mankind. We wish to bring out the best in our students and prepare them to become competent enough to meet the challenges of the world.',
  'Moving ahead on the path of excellence, the College is ready to effectively take up the forthcoming challenges in diversified domains.',
  'I welcome you to this college, and assure you that we shall leave no stone unturned to equip you with best possible training and exposure so that you can shape up your career and growth for a challenging life.',
  'I am sure that you will feel proud on being associated with us and make us equally proud with your academic excellence.',
];

const Image = styled.div`
  background: url(${({ img }) => img}) center center;
  background-size: cover;
  height: 500px;
  width: 350px;
  margin: 0 auto;
  ${media.phone`
    width: 75%;
    height: 330px;
  `};
`;

const Wrapper2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  ${media.phone`
    order: 1;
    width: 100%;
  `};
`;

const WrapperMod = Wrapper.extend`
  flex: 1;
  padding: 0 20px;
  text-align: center;
  ${media.phone`
    order: 2;
    padding: 0px;
  `};
`;

const FlexResMod = FlexRes.extend`
  justify-content: center;
  align-items: center;
  padding: 100px 0px;
`;

const H3Mod = H3.extend`
  ${media.phone`
    order: -1;
  `};
`;

const PrincipalMessage = ({ data, img }) => () => (
  <Container>
    <FlexResMod>
      <WrapperMod>
        <H3 center margin="20px 0px 0px 0px">
          Principal&apos;s Message
        </H3>
        {data.map((para) => <p key={para.slice(0, 10)}>{para}</p>)}
      </WrapperMod>
      <Wrapper2>
        <Image img={img} />
        <H3Mod center margin="10px 0px 5px 0px">
          Principal
        </H3Mod>
        <H3 center margin="10px 0px 5px 0px">
          <strong>Prof. K.C. Tiwari</strong>
        </H3>
      </Wrapper2>
    </FlexResMod>
  </Container>
);

export default PrincipalMessage({ data: desc, img: image });
