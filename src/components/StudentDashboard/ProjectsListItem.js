import React from 'react';
import styled from 'styled-components';
import { ButtonLink, A, Flex } from 'theme/Components';
import media from 'theme/media';
import { WrapperEnd, HR } from './Shared.styles';

const Description = styled.p`
  font-family: 'Open Sans', sans-serif;
  padding: 20px 0px;
  display: block;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  word-wrap: break-word;
  hyphens: auto;
`;

const Title = styled.h5`
  font-family: 'Alegreya Sans', sans-serif;
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Wrapper1 = styled.div`
  text-align: center;
`;

const ImageFlex = Flex.extend`
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: center;
  ${media.phone`
    flex-direction: column;
  `};
`;

const Image = styled.img`
  max-height: 250px;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  ${media.phone`
    width: auto;
    height: 30vh;
  `};
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;
  padding: 0px 10px;
`;

export default ({ title, description, link, _id, edit, photos = [] } = {}) => (
  <div>
    <Title>{title}</Title>
    <Wrapper1>
      Visit this project at :
      <A target="_blank" href={`http://${link}`}>
        {link}
      </A>
    </Wrapper1>
    <ImageFlex>
      {photos[0] && (
        <Div>
          <Image src={`http://localhost:3000/${photos[0]}`} alt="project" />
        </Div>
      )}
      {photos[1] && (
        <Div>
          <Image src={`http://localhost:3000/${photos[1]}`} alt="project" />
        </Div>
      )}
      {photos[2] && (
        <Div>
          <Image src={`http://localhost:3000/${photos[2]}`} alt="project" />
        </Div>
      )}
      {photos[3] && (
        <Div>
          <Image src={`http://localhost:3000/${photos[3]}`} alt="project" />
        </Div>
      )}
      {photos[4] && (
        <Div>
          <Image src={`http://localhost:3000/${photos[4]}`} alt="project" />
        </Div>
      )}
    </ImageFlex>
    <Description>{description}</Description>
    {edit && (
      <WrapperEnd>
        <ButtonLink to={`/student/myprofile/editproject/${_id}`}>
          Edit
        </ButtonLink>
      </WrapperEnd>
    )}
    <HR />
  </div>
);
