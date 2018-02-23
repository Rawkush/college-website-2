import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//  Styled-Components
import { Flex, FlexItem } from 'theme/Components';

//  Actions
import { startSetAllNotification } from 'actions/notifications';

//  Components
import NotificationItem from './NotificationItem';

// Styled Components
const NotificationDiv = styled.div`
  text-align: center;
`;

const FilterComponent = ({ changeHandler }) => (
  <div>
    <input type="text" onChange={(e) => changeHandler(e)} />
  </div>
);

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: this.props.notifications,
      home: this.props.home,
      notification: this.props.notification,
    };
  }

  componentDidMount() {
    if (this.state.notification && this.state.notifications.length <= 3) {
      this.props.getNotifications();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      notifications: nextProps.notifications,
      home: nextProps.home,
      notification: nextProps.notification,
    }));
  }

  filterText = (array, text) =>
    array.filter((elem) =>
      elem.title.toLowerCase().includes(text.toLowerCase())
    );

  changeHandler = (e) => {
    const { value } = e.target;
    if (value) {
      this.setState((prevState, props) => ({
        notifications: this.filterText(props.notifications, value),
      }));
    } else {
      this.setState((prevState, props) => ({
        notifications: props.notifications,
      }));
    }
  };

  render() {
    return (
      <NotificationDiv>
        <h2>Notifications</h2>
        {this.state.notification && (
          <FilterComponent changeHandler={this.changeHandler} />
        )}
        <Flex>
          {this.state.notifications ? (
            this.state.notifications
              .filter(
                (n, i) => (this.state.home && i < 3) || this.state.notification
              )
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
      </NotificationDiv>
    );
  }
}

const mapStateToProps = (state) => ({ notifications: state.notifications });

const mapDispatchToProps = (dispatch) => ({
  getNotifications: () => dispatch(startSetAllNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
