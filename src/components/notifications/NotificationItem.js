import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import { lightGrey, darkGrey } from 'theme/variable';

const NotificationDiv = styled.div`
  background-color: ${lightGrey};
  padding: 10px;
  min-width: 150px;
  max-width: 250px;
  min-height: 220px;
  max-height: 300px;
  margin: 10px;
  margin-top: 80px;
  text-align: center;
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.4);
`;

const DateDiv = styled.div`
  background: ${darkGrey};
  display: inline-block;
  padding: 30px 5px;
  color: white;
  margin-top: -14%;
  margin-left: -60%;
`;

const Span1 = styled.span`
  font-family: 'roboto', sans-serif;
  font-size: 1.1em;
`;

const Span2 = styled.span`
  font-family: 'roboto', sans-serif;
  font-size: 0.8em;
`;

const Title = styled.a`
  text-align: center;
  text-decoration: none;
  color: black;
  font-family: 'roboto', sans-serif;
  font-size: 1.2rem;
  &:hover {
    font-weight: 500;
    text-shadow: 1px 1px 1px #000000;
  }
`;

const TitleDiv = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const Download = Title.extend`
  text-align: left;
`;

const DownloadDiv = styled.div`
  text-align: left;
`;

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
        <Span1>{moment(createdAt).format('DD-MMM')}</Span1> 
        <br />
        <Span2>{moment(createdAt).format('YYYY')}</Span2>
      </DateDiv>
    </div>
    <TitleDiv>
      <Title href={link}>
        {title}
        {/* {tags.map((tag) => <p key={tag}>{tag}</p>)} */}
      </Title>
    </TitleDiv>
    <DownloadDiv>
      <Download href={file} target="_blank">
        D
      </Download>
    </DownloadDiv>
    {location === '/admin/notifications' &&
      auth && <Link to={`/admin/notifications/edit/${_id}`}>Edit</Link>}
  </NotificationDiv>
);

export default NotificationItem;
