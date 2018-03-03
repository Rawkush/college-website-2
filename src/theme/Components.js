import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from './media';
import { red } from './variable';

const H1 = styled.h1`
  font-family: 'Noto Serif', serif;
  font-size: 25px;
  font-weight: 400;
`;

const H2 = styled.h2`
  font-family: 'Noto Serif', serif;
  font-size: 1.6rem;
  font-weight: 400;
`;

const H3 = styled.h3`
  font-family: 'Alegreya Sans', serif;
  font-size: 1.4rem;
  font-weight: 400;
  margin: ${({ margin }) => margin || '0px'};
`;

const Container = styled.div`
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
  ${media.phone`
    width: 95%;
  `};
`;

const Button = styled.button`
  color: rgba(0, 0, 0, 0.5);
  background: white;
  padding: 4px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.22);
  flex-grow: 1;
  transition: all 0.1s;
  &:hover {
    background: #fff;
    cursor: pointer;
    color: #c14545;
    border: 1px solid #c14545;
  }

  ${media.phone`
    padding: 4px 12px;
    font-size: 4vw;
  `};
`;

const Flex = styled.div`
  display: flex;
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-grow: 1;
  height: ${(props) => (props.h ? props.h : '')};
`;

const FlexItem = styled.div`
  flex: 1;
  text-align: center;
`;

const Page = styled.div`
  font-family: 'roboto', sans-serif;
  margin-top: ${(props) => (props.mt ? props.mt : '110px')};
  margin-bottom: ${(props) => (props.mb ? props.b : 0)};
  margin-right: ${(props) => (props.mr ? props.mr : 0)};
  margin-left: ${(props) => (props.ml ? props.ml : 0)};
  padding-left: ${(props) => (props.pl ? props.pl : 0)};
  padding-right: ${(props) => (props.pr ? props.pr : 0)};
  padding-top: ${(props) => (props.pt ? props.pt : 0)};
  padding-bottom: ${(props) => (props.pb ? props.pb : 0)};
  padding: ${(props) => (props.p ? props.p : 0)};
  ${media.phone`
    margin-top: ${(props) => (props.mt ? props.mt : '68px')};    
  `};
`;

const A = styled.a`
  color: ${red};
  text-decoration: none;
  font-family: 'Alegreya Sans', sans-serif;
  padding: 1px 1px 3px 1px;
  margin: 5px 0px 0px 7px;
  display: inline-block;
  transition: color 0.02s cubic-bezier(0.4, 0.18, 0.76, 0.34);
  position: relative;
  z-index: 10;
  &:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 5%;
    width: 100%;
    background: ${red};
    z-index: -1;
    transition: height 0.1s;
  }
  &:hover {
    color: white;
    &:after {
      height: 100%;
    }
  }
`;

const ButtonLink = styled(Link)`
  right: 0;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.8);
  font-family: 'Open Sans', sans-serif;
  border: solid 0.5px #a9a9a9;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 3px;
  transition: all 0.1s ease;
  &:hover {
    color: rgba(136, 0, 0, 0.8);
    border: solid 0.5px rgba(136, 0, 0, 0.8);
  }
`;

export {
  H1,
  H2,
  H3,
  A,
  Container,
  Button,
  Flex,
  FlexCenter,
  FlexItem,
  Page,
  ButtonLink,
};
