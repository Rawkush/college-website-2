import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { red } from 'theme/variable';
import { A as StyledA, HR, ButtonLink } from 'theme/Components';

const NotificationDiv = styled.div`
  text-align: left;
`;

const A = styled.a`
  text-decoration: underline;
  font-family: 'Open Sans', sans-serif;
  color: ${red};
`;

const DateSpan = styled.span`
  font-family: 'Noto Serif', sans-serif;
  font-size: 15px;
  opacity: 0.7;
`;

const NotificationItem = ({ title, createdAt, link, file, _id }) => (
  <NotificationDiv>
    <A href={link} target="_blank">
      <p>{title}</p>
    </A>
    <div>
      <DateSpan>{moment(createdAt).format('DD MMM, YYYY')}</DateSpan>
      {file && (
        <StyledA href={`/${file}`} target="_blank">
          Download File
        </StyledA>
      )}
    </div>
    <ButtonLink m="10px 0px 0px 0px" to={`/teacher/notification/edit/${_id}`}>
      Edit
    </ButtonLink>
    <HR w="100%" m="14px auto 0px auto" opa="0.6" />
  </NotificationDiv>
);

export default NotificationItem;
