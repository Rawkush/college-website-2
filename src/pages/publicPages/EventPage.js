import React, { Component } from 'react';
import { connect } from 'react-redux';
import LightBox from 'react-images';
import moment from 'moment';
import styled from 'styled-components';
import { Page, H2Res, Container, Loader, Flex } from 'theme/Components';
import media from 'theme/media';

const theme = {
  container: {
    background: 'rgba(255, 255, 255, 0.9)',
  },
  arrow: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fill: '#222',
    opacity: 0.6,
    transition: 'opacity 200ms',
    ':hover': {
      opacity: 1,
    },
  },
  arrow__size__medium: {
    borderRadius: 40,
    height: 40,
    marginTop: -20,
    '@media (min-width: 768px)': {
      height: 70,
      padding: 15,
    },
  },
  arrow__direction__left: {
    marginLeft: 10,
  },
  arrow__direction__right: {
    marginRight: 10,
  },
  close: {
    fill: '#D40000',
    opacity: 0.6,
    transition: 'all 200ms',
    ':hover': {
      opacity: 1,
    },
  },
  footer: {
    color: 'black',
  },
  footerCount: {
    color: 'rgba(0, 0, 0, 0.6)',
  },
  thumbnail: {},
  thumbnail__active: {
    boxShadow: '0 0 0 2px #00D8FF',
  },
};

const ImageFlex = Flex.extend`
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: center;
  ${media.phone`
    flex-direction: column;
  `};
`;

const Image = styled.img`
  max-height: 250px;
  width: auto;
  max-width: 100%;
  margin: 0 auto;
  ${media.phone`
    width: auto;
    height: 30vh;
  `};
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px;
  padding: 0px 10px;
  &:hover {
    cursor: pointer;
  }
`;

const DateSpan = styled.span`
  font-family: 'Noto Serif', sans-serif;
`;

const PlaceSpan = styled.span`
  font-family: 'Noto Serif', sans-serif;
  margin: 15px 0px;
`;

const Wrapper = styled.div`
  margin: 10px 0px;
`;

const Description = styled.div`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 20px;
  margin: 40px 0px;
`;

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: false,
      lightBox: false,
      currentImage: 0,
    };
  }

  componentWillReceiveProps({
    event: { name, photos = [], date, place, type, description },
  }) {
    this.setState(() => ({
      event: true,
      name,
      date,
      place,
      type,
      description,
      photos: photos.map((photo) => `/${photo}`.replace(/\\/g, '/')),
    }));
  }

  onClose = () => {
    this.setState(() => ({ lightBox: false }));
  };

  onClickNext = () => {
    this.setState(({ currentImage: curr }) => ({ currentImage: curr + 1 }));
  };

  onClickPrev = () => {
    this.setState(({ currentImage: curr }) => ({ currentImage: curr - 1 }));
  };

  onClickThumbnail = (index) => {
    this.setState(() => ({ currentImage: index }));
  };

  imageClick = (index) => {
    this.setState(() => ({ currentImage: index, lightBox: true }));
  };

  returnImageSet = (photoArray) => photoArray.map((photo) => ({ src: photo }));

  render() {
    if (this.state.event) {
      return (
        <div>
          <LightBox
            images={this.returnImageSet(this.state.photos)}
            isOpen={this.state.lightBox}
            onClose={this.onClose}
            onClickNext={this.onClickNext}
            onClickPrev={this.onClickPrev}
            currentImage={this.state.currentImage}
            showThumbnails
            onClickThumbnail={this.onClickThumbnail}
            theme={theme}
          />
          <Page>
            <Container>
              <H2Res margin="150px 0px 20px 0px" marginRes="100px 0px 20px 0px">
                {this.state.name}
              </H2Res>
              <Wrapper>
                <DateSpan>
                  {moment(this.state.date).format('DD MMMM, YYYY')}
                </DateSpan>
                {' | '}
                <PlaceSpan>{this.state.place}</PlaceSpan>
              </Wrapper>
              <ImageFlex>
                {this.state.photos.map((photo, index) => (
                  <Div key={photo}>
                    <Image
                      src={photo}
                      alt="Event Pic"
                      onClick={() => this.imageClick(index)}
                    />
                  </Div>
                ))}
              </ImageFlex>
              <Description>{this.state.description}</Description>
            </Container>
          </Page>
        </div>
      );
    }
    return (
      <Page>
        <Loader>Loading...</Loader>
      </Page>
    );
  }
}

const mapStateToProps = (state, props) => ({
  event:
    state.events &&
    state.events.find(({ _id }) => _id === props.match.params._id),
});

export default connect(mapStateToProps)(EventPage);
