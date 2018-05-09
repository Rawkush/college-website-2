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
} from './Carousel.styles';

//  assets
import CollegeImage from './../../assets/images/college-image-sample.jpeg';

// let intervalId;

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
  };

  updateProgressBar = () => {
    if (this.state.time >= 3000) {
      return this.setState(() => ({ time: 0 }));
    }
    return this.setState(({ startTime }) => ({
      time: Date.now() - startTime,
    }));
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
        <WrapperMod w="100%" bg={data[count].photo} index={count}>
          <Gradient>
            <ContainerMod>
              <PreHeadline>{data[count].preHeadline}</PreHeadline>
              <Headline>{data[count].headline}</Headline>
              {count !== 0 ? (
                <DateAndPlace>
                  {`${moment(data[count].date).format('DD MMM, YYYY')} | ${
                    data[count].place
                  }`}
                </DateAndPlace>
              ) : (
                ''
              )}
              <FlexMod>
                <Line>
                  <LineProgress
                    count={0}
                    currentCount={count}
                    width={time / 3000 * 100}
                  />
                </Line>
                <Line>
                  <LineProgress
                    count={1}
                    currentCount={count}
                    width={time / 3000 * 100}
                  />
                </Line>
                <Line>
                  <LineProgress
                    count={2}
                    currentCount={count}
                    width={time / 3000 * 100}
                  />
                </Line>
                <Line>
                  <LineProgress
                    count={3}
                    currentCount={count}
                    width={time / 3000 * 100}
                  />
                </Line>
              </FlexMod>
            </ContainerMod>
          </Gradient>
        </WrapperMod>
      </WrapperMod2>
    );
  }
}

const mapStateToProps = ({ events }) => ({
  events: events.map(({ name: headline, photos: [photo], place, date }) => ({
    headline,
    photo,
    preHeadline: 'Event',
    place,
    date,
  })),
});

export default connect(mapStateToProps)(Carousel);
