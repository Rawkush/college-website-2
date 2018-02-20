import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import { lightGrey, darkGrey } from 'theme/variable';

const NotificationDiv = styled.div`
  background-color: ${lightGrey};
  padding: 10px;
`;

const DateDiv = styled.div`
  background: ${darkGrey};
  display: inline-block;
  padding: 40px 20px;
  color: white;
`;

const SpanDate1 = styled.span``;

const NotificationItem = ({
  title,
  tags,
  createdAt,
  link,
  file,
  _id,
  location,
  auth,
}) => (
  <NotificationDiv>
    <div>
      <DateDiv>
        <span>{moment(createdAt).format('DD MMM,')}</span>
        <br />
        <span>{moment(createdAt).format('YYYY')}</span>
      </DateDiv>
    </div>
    <a href={link}>
      <p>{title}</p>
      {tags.map((tag) => <p key={tag}>{tag}</p>)}
    </a>
    <a href={file} target="_blank">
      Download File
    </a>
    {location === '/admin/notifications' &&
      auth && <Link to={`/admin/notifications/edit/${_id}`}>Edit</Link>}
  </NotificationDiv>
);

export default NotificationItem;
