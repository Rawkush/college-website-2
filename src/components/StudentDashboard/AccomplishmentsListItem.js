import React from 'react';
import styled from 'styled-components';

import { ButtonLink } from 'theme/Components';

const Title = styled.h5`
  font-family: 'Alegreya Sans', sans-serif;
  text-align: center;
  font-size: 20px;
`;

const Image = styled.img`
  display: block;
  width: auto;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
`;

const Description = styled.p`
  font-family: 'Open Sans', sans-serif;
  padding: 15px 0px;
  display: block;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  word-wrap: break-word;
  hyphens: auto;
`;

const Wrapper1 = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HR = styled.hr`
  width: 50vw;
  margin: 0 auto;
`;

export default ({ title, photo, description, _id, edit } = {}) => (
  <div>
    <Title>{title}</Title>
    <Image src={`http://localhost:3000/${photo}`} alt="accomplishment" />
    <Description>{description}</Description>
    {edit && (
      <Wrapper1>
        <ButtonLink to={`/student/myprofile/editaccomplishment/${_id}`}>
          Edit
        </ButtonLink>
      </Wrapper1>
    )}
    <HR />
  </div>
);
