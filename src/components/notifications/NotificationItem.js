import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import styled from 'styled-components';
import { darkGrey } from 'theme/variable';
import { FlexCenter } from 'theme/Components';
import media from 'theme/media';

import DownloadIconSVG from './DownloadIconSVG';

const NotificationDiv = styled.div`
  background-color: rgb(208, 208, 208);
  padding: 10px;
  width: 250px;
  margin: 50px auto 26px auto;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 10px 11px rgba(0, 0, 0, 0.1);
  }
  ${media.phone`
    margin: 50px 10px 26px 10px;
  `};
`;

const DateDiv = styled.div`
  background: ${darkGrey};
  display: inline-block;
  padding: 27px 6px 10px 6px;
  color: white;
  margin-top: -17%;
  margin-left: -63%;
`;

const Span1 = styled.span`
  font-family: 'roboto', sans-serif;
  font-size: 1.3em;
`;

const Span2 = styled.span`
  font-family: 'roboto', sans-serif;
  font-size: 1em;
  padding: 10px 0px;
  text-align: right;
  display: block;
`;

const Title = styled.a`
  text-align: center;
  text-decoration: none;
  color: black;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  transition: all 0.2s ease;
  &:hover {
    text-decoration: underline;
  }
`;

const TitleDiv = styled.div`
  margin-top: 18px;
  width: 100%;
  min-height: 100px;
`;

const Download = styled.a`
  flex: 1;
`;

const Tags = styled.div`
  flex: 5;
  display: flex;
  justify-content: flex-end;
`;

const Tag = styled.span`
  font-family: 'Noto Serif', sans-serif;
  font-size: 14px;
  padding: 0px 2px;
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
    </div>{' '}
    -{' '}
    <TitleDiv>
      <Title href={link}>{title}</Title>
    </TitleDiv>
    <FlexCenter>
      <Download href={file} target="_blank">
        <DownloadIconSVG />
      </Download>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>
            {tag}
            {'  '}
            <MiddleDot />
          </Tag>
        ))}
      </Tags>
    </FlexCenter>
    {location === '/admin/notifications' &&
      auth && <Link to={`/admin/notifications/edit/${_id}`}>Edit</Link>}
  </NotificationDiv>
);

export default NotificationItem;
