import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flex } from 'theme/Components';

//  Components
import EventListItem from './EventListItem';

const FlexMod = Flex.extend`
  justify-content: space-evenly;
`;

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events || [],
      auth: this.props.auth,
    };
  }

  componentWillReceiveProps({ events, auth }) {
    this.setState(() => ({ events, auth }));
  }

  render() {
    return (
      <FlexMod wrap>
        {this.state.events &&
          this.state.events.map((event) => (
            <EventListItem {...event} key={event._id} auth={this.state.auth} />
          ))}
      </FlexMod>
    );
  }
}

const mapStateToProps = ({ events, auth: { admin: auth } }) => ({
  events,
  auth,
});

export default connect(mapStateToProps)(EventsList);
