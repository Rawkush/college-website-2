import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flex } from 'theme/Components';

//  Components
import EventListItem from './EventListItem';

const FlexMod = Flex.extend`
  justify-content: space-evenly;
`;

class EventsListHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events || [],
    };
  }

  componentWillReceiveProps({ events }) {
    this.setState(() => ({ events }));
  }

  render() {
    return (
      <FlexMod wrap>
        {this.state.events &&
          this.state.events.map((event) => (
            <EventListItem {...event} key={event._id} />
          ))}
      </FlexMod>
    );
  }
}

const mapStateToProps = ({ events }) => ({ events });

export default connect(mapStateToProps)(EventsListHome);
