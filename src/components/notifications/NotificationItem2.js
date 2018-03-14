import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { red } from 'theme/variable';
import { A as StyledA, HR, ButtonLink } from 'theme/Components';

import TagMapper from './Utils';

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

const Tag = styled.span`
  font-size: 16px;
  font-family: 'Alegreya Sans';
  opacity: 0.7;
  padding: 0px 1px;
`;

const MiddleDot = styled.span`
  &::after {
    content: '\00B7';
  }
`;

const NotificationItem = ({
  title,
  tags,
  createdAt,
  link,
  file,
  _id,
  auth,
}) => (
  <NotificationDiv>
    <A href={link}>
      <p>{title}</p>
    </A>
    <div>
      <DateSpan>{moment(createdAt).format('DD MMM, YYYY')} | </DateSpan>
      {TagMapper(tags).map((tag) => (
        <Tag key={tag}>
          {tag} <MiddleDot />
        </Tag>
      ))}
      {file && (
        <StyledA href={file} target="_blank">
          Download File
        </StyledA>
      )}
    </div>
    {auth && (
      <ButtonLink m="10px 0px 0px 0px" to={`/admin/notifications/edit/${_id}`}>
        Edit
      </ButtonLink>
    )}
    <HR w="100%" m="14px auto 0px auto" opa="0.6" />
  </NotificationDiv>
);

export default NotificationItem;
