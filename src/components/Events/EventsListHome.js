import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Flex, Wrapper } from 'theme/Components';
import EventListItem from './EventsListItemHome';

const FlexMod = Flex.extend`
  width: 300vw;
  overflow-x: hidden;
`;

const WrapperMod = Wrapper.extend`
  overflow-x: hidden;
`;

const PrevButton = () => (
  <svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 477.175 477.175"
    height="100px"
    width="70"
  >
    <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" />
  </svg>
);

const NextButton = () => (
  <svg
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 306 306"
    height="100px"
    width="70"
  >
    <polygon
      points="94.35,0 58.65,35.7 175.95,153 58.65,270.3 94.35,306 247.35,153"
      id="chevron-right"
    />
  </svg>
);

class EventsListHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: this.props.events || [],
      active1: true,
      active2: false,
      active3: false,
    };
  }

  componentWillReceiveProps({ events }) {
    this.setState(() => ({ events }));
  }

  render() {
    return (
      <WrapperMod w="100vw">
        <FlexMod>
          <PrevButton />
          <FlexMod>
            {this.state.events &&
              this.state.events.map((eventDet) => (
                <EventListItem key={eventDet._id} {...eventDet} />
              ))}
          </FlexMod>
          <NextButton />
        </FlexMod>
      </WrapperMod>
    );
  }
}

const mapStateToProps = ({ events }) => ({ events });

export default connect(mapStateToProps)(EventsListHome);
