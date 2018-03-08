import React from 'react';
import styled from 'styled-components';

import NotificationListItem from './NotificationListItem';

const Title = styled.h4`
  margin: 50px 0px;
  font-size: 30px;
  font-family: 'Noto Serif', serif;
  text-align: center;
  `;
  const HR = styled.hr`
  width: 50vw;
  margin: 0 auto;
`;
  const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;
export default ({ notifications = [], edit } = {}) => (
  <div>
   <Wrapper>
    <Title>Notifications</Title>
    {notifications.map((notification) => (
      <NotificationListItem key={notification._id} {...notification} edit />
    ))}
</Wrapper>
<HR />
  </div>
);
