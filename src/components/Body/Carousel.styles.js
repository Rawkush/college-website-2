import styled from 'styled-components';
//  Styled Components
import { Container, Wrapper, Flex, SVG, SimpleLink } from 'theme/Components';
import media from 'theme/media';

const WrapperMod = Wrapper.extend`
  height: 500px;
  background: url(${({ bg }) => bg.replace(/\\/g, '/')}) center center no-repeat;
  background-size: cover;
  position: relative;
  transition: all 0.2s ease-out;
`;
const WrapperMod2 = Wrapper.extend`
  overflow: hidden;
`;

const Headline = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 35px;
  color: white;
  position: absolute;
  bottom: 100px;
  ${media.phone`
    font-size: 27px;
  `};
`;

const PreHeadline = styled.h2`
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  color: rgba(255, 255, 255, 0.3);
  position: absolute;
  bottom: 150px;
  ${media.phone`
    font-size: 25px;
    bottom: 200px;
  `};
`;

const Gradient = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(106, 44, 44, 0.7));
  height: 500px;
`;

const DateAndPlace = styled.div`
  position: absolute;
  bottom: 75px;
  right: 10px;
  color: #fff;
  font-size: 20px;
  ${media.phone`
    font-size: 18px;
    font-weight: 400;
  `};
`;

const ContainerMod = Container.extend`
  position: relative;
  height: 500px;
`;

const Line = styled.div`
  height: 1px;
  width: 24%;
  background: rgba(255, 255, 255, 0.3);
`;

const LineProgress = styled.div.attrs({
  style: ({ width = 0, count, currentCount }) => ({
    width: count === currentCount ? `${width}%` : '0',
  }),
})`
  height: 1px;
  background: rgba(255, 255, 255, 1);
`;

const FlexMod = Flex.extend`
  width: 100%;
  position: absolute;
  bottom: 55px;
  justify-content: space-around;
`;

const FlexCenter = Flex.extend`
  width: 100%;
  position: absolute;
  bottom: 55px;
  justify-content: center;
`;

const SVGMod = SVG.extend`
  text-align: center;
  position: absolute;
  bottom: 10px;
  transform: rotate(90deg);
  cursor: pointer;
  height: 30px;
  width: 100%;
  display: block;
`;

export {
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
  FlexCenter,
  SVG,
  SimpleLink,
  SVGMod,
};
