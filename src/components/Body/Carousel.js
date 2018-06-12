import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

//  Styled Components
import {
  WrapperMod,
  WrapperMod2,
  Headline,
  PreHeadline,
  Gradient,
  DateAndPlace,
  ContainerMod,
  Line,
  LineProgress,
  FlexMod,
  SVGMod,
  SimpleLink,
} from './Carousel.styles';

//  assets
import CollegeImage from './../../assets/images/college-image-sample.jpeg';

// let intervalId;

const DownButton = ({ onclick }) => (
  <SVGMod
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 477.175 477.175"
    fill="white"
    hovTransform="rotate(90deg) translateX(5px)"
    onclick={onclick}
  >
    <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z" />
  </SVGMod>
);

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          photo: CollegeImage,
          headline: 'Choudhary Brahm Prakash Government Engineering College',
          preHeadline: 'Welcome To,',
        },
        ...this.props.events,
      ],
      selectedItemCount: 0,
      startTime: null, // eslint-disable-line
      // haltTime: null,
      time: null,
    };
  }

  componentDidMount() {
    setInterval(this.updateItem, 3000);
    setInterval(this.updateProgressBar, 10);
    // eslint-disable-next-line
    this.setState(() => ({ startTime: Date.now() }));
  }

  componentWillReceiveProps({ events }) {
    this.setState(({ data }) => ({
      data: [...data, ...events],
    }));
  }

  updateItem = () => {
    if (this.state.data.length > 0) {
      this.setState(({ selectedItemCount: prevCount }) => {
        if (prevCount !== 3) {
          return { selectedItemCount: prevCount + 1, startTime: Date.now() };
        }
        return { selectedItemCount: 0, startTime: Date.now() };
      });
    }
    this.setState(() => ({ startTime: Date.now() }));
  };

  updateProgressBar = () => {
    if (this.state.time >= 3000) {
      return this.setState(() => ({ time: 0 }));
    }
    return this.setState(({ startTime }) => ({
      time: Date.now() - startTime,
    }));
  };

  scrollToTop = () => {
    window.scroll({ top: 510, left: 0, behavior: 'smooth' });
  };

  // pauseSlide = () => {
  //   this.setState(() => ({ haltTime: Date.now() }));
  //   clearInterval(intervalId);
  // };

  // resumeSlide = () => {
  //   setTimeout(() => {
  //     this.updateItem();
  //     intervalId = setInterval(this.updateItem, 3000);
  //   }, 3000 - (this.state.haltTime - this.state.startTime));
  // };

  render() {
    const { selectedItemCount: count, data, time } = this.state;
    return (
      <WrapperMod2 w="100%">
        <WrapperMod
          w="100%"
          bg={data[count] ? data[count].photo : ''}
          index={count}
        >
          <Gradient>
            <ContainerMod>
              <PreHeadline>
                {data[count] ? data[count].preHeadline : ''}
              </PreHeadline>
              <Headline>{data[count] ? data[count].headline : ''}</Headline>
              {count !== 0 ? (
                <DateAndPlace>
                  {`${moment(data[count] ? data[count].date : '').format(
                    'DD MMM, YYYY'
                  )} | ${data[count] ? data[count].place : ''}`}
                  {' | '}
                  {count ? (
                    <SimpleLink
                      to={`event/${data[count] ? data[count]._id : ''}`}
                    >
                      See Event
                    </SimpleLink>
                  ) : (
                    ''
                  )}
                </DateAndPlace>
              ) : (
                ''
              )}
              <FlexMod>
                <Line>
                  <LineProgress
                    count={0}
                    currentCount={count}
                    width={count === 0 ? time / 3000 * 100 : 0}
                  />
                </Line>
                <Line>
                  <LineProgress
                    count={1}
                    currentCount={count}
                    width={count === 1 ? time / 3000 * 100 : 0}
                  />
                </Line>
                <Line>
                  <LineProgress
                    count={2}
                    currentCount={count}
                    width={count === 2 ? time / 3000 * 100 : 0}
                  />
                </Line>
                <Line>
                  <LineProgress
                    count={3}
                    currentCount={count}
                    width={count === 3 ? time / 3000 * 100 : 0}
                  />
                </Line>
              </FlexMod>
              {/* eslint-disable-next-line */}
              <a onClick={this.scrollToTop}>
                <DownButton />
              </a>
            </ContainerMod>
          </Gradient>
        </WrapperMod>
      </WrapperMod2>
    );
  }
}

const mapStateToProps = ({ events }) => ({
  events: events.map(
    ({ name: headline, photos: [photo], place, date, _id }) => ({
      headline,
      photo,
      preHeadline: 'Event',
      place,
      date,
      _id,
    })
  ),
});

export default connect(mapStateToProps)(Carousel);
