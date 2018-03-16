import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { red } from 'theme/variable';
import { A as StyledA, HR, Flex } from 'theme/Components';

const NotificationDiv = styled.div`
  text-align: left;
  opacity: ${({ read }) => (read ? '0.7' : 1)};
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
  flex: 1;
`;

const Name = styled.div`
  font-family: 'Noto Serif', sans-serif;
  font-size: 17px;
`;

const Wrapper = styled.div`
  text-align: right;
  display: flex;
  justify-content: flex-end;
  flex: 2;
  flex-direction: column;
`;

const Pos = styled.div`
  font-family: 'Noto Serif', sans-serif;
  font-size: 15px;
`;

const Creator = ({ name, currentPosition }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Pos>{currentPosition}</Pos>
  </Wrapper>
);

const NotificationItem = ({
  title,
  createdAt,
  link,
  file,
  markAsRead,
  _id,
  read,
  creator,
}) => (
  <NotificationDiv onClick={() => markAsRead(_id)} read={read}>
    <A href={link} target="_blank">
      <p>{title}</p>
    </A>
    <Flex>
      <DateSpan>{moment(createdAt).format('DD MMM, YYYY')}</DateSpan>
      {file && (
        <StyledA href={`/${file}`} target="_blank">
          Download File
        </StyledA>
      )}
      <Creator {...creator} />
    </Flex>
    <HR w="100%" m="14px auto 0px auto" opa="0.6" />
  </NotificationDiv>
);

export default NotificationItem;
