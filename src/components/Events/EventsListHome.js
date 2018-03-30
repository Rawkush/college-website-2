import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Wrapper } from 'theme/Components';
import EventListItem from './EventsListItemHome';

const Background = Wrapper.extend`
  width: 100vw;
  background: url(${({ bg }) => bg || 'none'}) center center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
`;

const WrapperMod = Wrapper.extend`
  transition: all 0.3s ease;
`;

const WrapperMod2 = Wrapper.extend`
  display: inline-flex;
  width: 100vw;
  justify-content: center;
`;

const SVG = styled.svg`
  height: ${({ height }) => height || '45px'};
  ${({ rotate }) => (rotate ? 'transform: rotateY(180deg)' : 'none')};
  fill: ${({ fill }) => fill || 'auto'};
  transition: all 0.3s ease;
`;

const PrevButton = () => (
  <SVG
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 477.175 477.175"
    height="100px"
    width="70"
    fill="white"
    rotate
  >
    <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" />
  </SVG>
);

const NextButton = () => (
  <SVG
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 477.175 477.175"
    height="100px"
    width="70"
    fill="white"
  >
    <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" />
  </SVG>
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

  returnUrl = (string) => `/${string.replace(/\\/g, '/')}`;

  returnBG = () => {
    const self = this;
    if (this.state.events.length) {
      if (this.state.active1) {
        return self.returnUrl(this.state.events[0].photos[0]);
      } else if (this.state.active2) {
        return self.returnUrl(this.state.events[1].photos[0]);
      } else if (this.state.active3) {
        return self.returnUrl(this.state.events[2].photos[0]);
      }
    }
    return null;
  };

  render() {
    return (
      <Background w="100%" bg={this.returnBG()}>
        <PrevButton />
        <WrapperMod w="100%">
          {this.state.events.map((event) => (
            <EventListItem
              {...event}
              key={event._id}
              active1={this.state.active1}
              active2={this.state.active2}
              active3={this.state.active3}
            />
          ))}
        </WrapperMod>
        <NextButton />
      </Background>
    );
  }
}

const mapStateToProps = ({ events }) => ({ events });

export default connect(mapStateToProps)(EventsListHome);
