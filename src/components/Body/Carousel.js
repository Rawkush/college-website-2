import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

//  Styled Components
import { Container, Wrapper, Flex } from 'theme/Components';

//  assets
import CollegeImage from './../../assets/images/college-image-sample.jpeg';

const WrapperMod = Wrapper.extend`
  height: 500px;
  background: url(${({ bg }) => bg.replace(/\\/g, '/')}) center center no-repeat;
  background-size: cover;
  position: relative;
  transition: all 0.2s ease-out;
  &:hover {
    transform: ${({ index }) => (index === 0 ? 'scale(1.0)' : 'scale(1.05)')};
  }
`;
const WrapperMod2 = Wrapper.extend`
  overflow: hidden;
`;

const Headline = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 35px;
  color: white;
  position: absolute;
  bottom: 80px;
`;

const PreHeadline = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.3);
  position: absolute;
  bottom: 144px;
`;

const Gradient = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(106, 44, 44, 0.7));
  height: 500px;
`;

const DateAndPlace = styled.div`
  position: absolute;
  bottom: 40px;
  right: 10px;
  color: #fff;
  font-size: 20px;
`;

const ContainerMod = Container.extend`
  position: relative;
  height: 500px;
`;

const Line = styled.div`
  height: 3px;
  width: 24%;
  background: rgba(255, 255, 255, 0.3);
`;

const LineProgress = styled.div`
  height: 3px;
  width: ${({ width = 0, count, currentCount }) =>
    count === currentCount ? `${width}%` : '0'};
  background: rgba(255, 255, 255, 1);
`;

const FlexMod = Flex.extend`
  width: 100%;
  position: absolute;
  bottom: 30px;
  justify-content: space-around;
`;

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
      startTime: null,
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
