import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Flex, ButtonLink } from 'theme/Components';

const A = styled.a`
  font-family: 'Open Sans', sans-serif;
  color: black;
  text-decoration: underline;
`;

const P = styled.p`
  margin: 2px 0px;
  flex: 3;
`;

const Wrapper = styled.div`
  margin-bottom: 16px;
`;

const Wrapper2 = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const HR = styled.hr`
  width: 50%;
  opacity: 0.4;
`;

export default ({ _id, title, wef, file, auth }) => (
  <Wrapper>
    <Flex>
      <P>
        <A target="_blank" href={file}>
          {title}
        </A>
      </P>
      {auth && (
        <Wrapper2>
          <ButtonLink to={`/admin/timetable/edit/${_id}`}>Edit</ButtonLink>
        </Wrapper2>
      )}
    </Flex>
    <p>{moment(wef).format('DD MMMM, YYYY')}</p>
    <HR />
  </Wrapper>
);
