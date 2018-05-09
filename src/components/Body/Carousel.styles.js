import styled from 'styled-components';
//  Styled Components
import { Container, Wrapper, Flex } from 'theme/Components';

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
};
