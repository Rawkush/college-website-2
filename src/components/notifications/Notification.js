import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

//  Styled-Components
import { Flex, FlexItem, Wrapper, H2 } from 'theme/Components';
import media from 'theme/media';

//  Actions
import { startSetAllNotification } from 'actions/notifications';

//  Components
import NotificationItem2 from './NotificationItem2';
import NotificationItem from './NotificationItem';

// Styled Components
const NotificationDiv = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const FlexItemModded = FlexItem.extend`
  flex: ${({ notification }) => (notification ? '0' : '1')};
  display: ${({ home }) => (home ? 'flex' : 'auto')};
  align-items: ${({ home }) => (home ? 'center' : 'auto')};
`;

const Input = styled.input`
  width: 70%;
  padding: 7px;
  ${media.phone`
      padding: 5px 0px 5px 5px;
      width: 97%;
    `};
  font-family: 'Open Sans', sans-serif;
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, 0.27);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  line-height: 1.5;
  margin-top: ${({ mtop }) => mtop || '0px'};
  &:focus {
    border: solid 1px red;
    box-shadow: 0 0 0 0.2rem rgba(179, 0, 0, 0.3);
  }
`;

const Select = styled.select`
  width: 24%;
  padding: 7px;
  margin-left: 20px;
  ${media.phone`
      padding: 5px 0px;
      width: 99%;
      margin-left: 0px;
      margin-top: 16px
    `};
  font-family: 'Open Sans', sans-serif;
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, 0.27);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  line-height: 1.5;
  &:focus {
    border: solid 1px red;
    box-shadow: 0 0 0 0.2rem rgba(179, 0, 0, 0.3);
  }
`;

const padding = '16px auto -6px auto';

const FlexMod = Flex.extend`
  flex-direction: ${({ notification }) => (notification ? 'column' : 'row')};
  height: ${({ notification }) => (notification ? '500px' : 'auto')};
  width: ${({ notification }) => (notification ? 'auto' : 'auto')};
  margin: ${({ notification }) => (notification ? padding : 'auto')};
  overflow-y: ${({ notification }) => (notification ? 'scroll' : 'hidden')};
  overflow-x: ${({ notification }) => (notification ? 'hidden' : 'auto')};
  border: ${({ notification }) => (notification ? '1px solid #ddd' : 'none')};
  padding: ${({ notification }) => (notification ? '0px 10px' : 'none')};
  border-radius: 3px;
  ${media.phone`
    padding: ${({ notification }) => (notification ? '15px 10px' : 'auto')};    
  `};
`;

const Span = styled.div`
  border: ${({ notification }) => (notification ? 'solid 1px #ddd' : 'auto')};
  width: ${({ notification }) => (notification ? 'auto' : 'auto')};
  max-width: ${({ notification }) => (notification ? '700px' : 'auto')};
  margin: ${({ notification }) => (notification ? '0 auto' : 'auto')};
  border-radius: ${({ notification }) => (notification ? '5px' : 'auto')};
  padding: ${({ notification }) => (notification ? '15px 10px' : 'auto')};
`;

const TextFilterComponent = ({ changeHandler }) => (
  <Input type="text" onChange={(e) => changeHandler(e)} placeholder="search" />
);

const SelectFilterComponent = ({ changeHandler }) => (
  <Select
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
  </Select>
);

const latestSort = (array) =>
  array.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: this.props.notifications,
      auth: this.props.auth,
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
      auth: nextProps.auth,
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
        <Span notification={this.state.notification}>
          {this.state.notification && (
            <Wrapper w="700px">
              <TextFilterComponent changeHandler={this.filterChangeHandler} />
              <SelectFilterComponent
                changeHandler={this.filterSelectChangeHandler}
              />
            </Wrapper>
          )}
          <FlexMod notification={this.state.notification}>
            {this.state.notifications ? (
              this.state.notifications
                .filter(
                  (n, i) =>
                    (this.state.home && i < 3) || this.state.notification
                )
                .map(({ title, createdAt, tags, link, _id, file }) => (
                  <FlexItemModded
                    notification={this.state.notification}
                    key={_id}
                    home={this.state.home}
                  >
                    {this.state.home && (
                      <NotificationItem
                        title={title}
                        createdAt={createdAt}
                        tags={tags}
                        link={link}
                        file={file}
                      />
                    )}
                    {this.state.notification && (
                      <NotificationItem2
                        title={title}
                        createdAt={createdAt}
                        tags={tags}
                        link={link}
                        file={file}
                        _id={_id}
                        auth={this.state.auth}
                      />
                    )}
                  </FlexItemModded>
                ))
            ) : (
              <p> Loading... </p>
            )}
          </FlexMod>
        </Span>
      </NotificationDiv>
    );
  }
}

const mapStateToProps = (state) => ({
  notifications: latestSort(state.notifications),
  auth: state.auth.admin,
});

const mapDispatchToProps = (dispatch) => ({
  getNotifications: () => dispatch(startSetAllNotification()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
