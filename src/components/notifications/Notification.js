import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Flex, FlexItem } from 'theme/Components';

//  Components
import NotificationItem from './NotificationItem';

// Styled Components
const NotificationDiv = styled.div`
  text-align: center;
`;

const Notification = ({ notifications, home, notification }) => (
  <div>
    <h2>Notifications</h2>
    <Flex>
      {notifications ? (
        notifications
          .filter((n, i) => (home && i < 3) || notification)
          .map(({ title, createdAt, tags, link, _id, file }) => (
            <FlexItem key={_id}>
              <NotificationItem
                title={title}
                createdAt={createdAt}
                tags={tags}
                link={link}
                file={file}
              />
            </FlexItem>
          ))
      ) : (
        <p> Loading... </p>
      )}
    </Flex>
  </div>
);

const mapStateToProps = (state) => ({ notifications: state.notifications });
export default connect(mapStateToProps)(Notification);
