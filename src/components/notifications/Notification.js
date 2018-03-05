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

const FlexMod = Flex.extend`
  flex-direction: ${({ notification }) => (notification ? 'column' : 'row')};
`;

const TextFilterComponent = ({ changeHandler }) => (
  <div>
    <input type="text" onChange={(e) => changeHandler(e)} />
  </div>
);

const SelectFilterComponent = ({ changeHandler }) => (
  <div>
    <select
      name="filter"
      id="filter"
      placeholder="Filter"
      onChange={(e) => changeHandler(e)}
    >
      <option value="" hidden>
        Filter
      </option>
      <option value="">None</option>
      <option value="it">I.T.</option>
      <option value="civil">Civil</option>
      <option value="env">Environment</option>
      <hr />
      <option value="iyear">1st Year</option>
      <option value="iiyear">2nd Year</option>
      <option value="iiiyear">3rd Year</option>
      <option value="ivyear">4th Year</option>
      <hr />
      <option value="teacher">Teachers</option>
      <option value="student">Students</option>
      <hr />
      <option value="pdf">PDFs</option>
      <option value="googleForm">Google Form</option>
      <option value="external">External Link</option>
    </select>
  </div>
);

const latestSort = (array) =>
  array.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

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

  filterText = (array, text, match) =>
    array.filter((elem) =>
      elem[match].toLowerCase().includes(text.toLowerCase())
    );

  filterArray = (array, text, matchArray) =>
    array.filter((elem) => elem[matchArray].includes(text));

  filterChangeHandler = (e) => {
    const { value } = e.target;
    if (value) {
      this.setState((prevState, props) => ({
        notifications: this.filterText(props.notifications, value, 'title'),
      }));
    } else {
      this.setState((prevState, props) => ({
        notifications: props.notifications,
      }));
    }
  };

  filterSelectChangeHandler = (e) => {
    const { value } = e.target;
    if (value) {
      this.setState((prevState, props) => ({
        notifications: this.filterArray(props.notifications, value, 'tags'),
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
          <div>
            <TextFilterComponent changeHandler={this.filterChangeHandler} />
            <SelectFilterComponent
              changeHandler={this.filterSelectChangeHandler}
            />
          </div>
        )}
        <FlexMod>
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
        </FlexMod>
      </NotificationDiv>
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: latestSort(state.notifications),
});

const mapDispatchToProps = (dispatch) => ({
  getNotifications: () => dispatch(startSetAllNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
