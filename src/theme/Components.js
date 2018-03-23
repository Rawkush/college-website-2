import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form } from 'formik';
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
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  margin: ${({ margin }) => margin || 'auto'};
`;

const H2Res = styled.h2`
  font-family: 'Noto Serif', serif;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  margin: ${({ margin }) => margin || 'auto'};
  ${media.phone`
    margin: ${({ marginRes }) => marginRes || 'auto'};
  `};
`;

const H2ResAuto = styled.h2`
  font-family: 'Noto Serif', serif;
  font-size: 1.6rem;
  font-weight: 400;
  text-align: ${({ left }) => (left ? 'left' : 'center')};
  margin: ${({ margin }) => margin || '115px 0px 25px 0px'};
  ${media.phone`
    margin: ${({ marginRes }) => marginRes || '94px 0px 20px 0px'};
  `};
`;

const H3 = styled.h3`
  font-family: 'Alegreya Sans', serif;
  font-size: 1.4rem;
  font-weight: 400;
  margin: ${({ margin }) => margin || '0px'};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

const H4 = styled.h4`
  font-family: 'Alegreya Sans', serif;
  font-size: 1.2rem;
  font-weight: 400;
  margin: ${({ margin }) => margin || '0px'};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
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
  width: ${({ w }) => w || 'auto'};
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
  justify-content: ${({ end }) => (end ? 'flex-end' : 'flex-start')};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'none')};
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
  margin-top: ${(props) => (props.mt ? props.mt : '93px')};
  margin-bottom: ${(props) => (props.mb ? props.b : 0)};
  margin-right: ${(props) => (props.mr ? props.mr : 0)};
  margin-left: ${(props) => (props.ml ? props.ml : 0)};
  padding-left: ${(props) => (props.pl ? props.pl : 0)};
  padding-right: ${(props) => (props.pr ? props.pr : 0)};
  padding-top: ${(props) => (props.pt ? props.pt : 0)};
  padding-bottom: ${(props) => (props.pb ? props.pb : 0)};
  padding: ${(props) => (props.p ? props.p : 0)};
  ${media.phone`
    margin-top: ${(props) => (props.mt ? props.mt : '90px')};    
  `};
  min-height: calc(100vh - 93px);
`;

const A = styled.a`
  color: ${red};
  text-decoration: none;
  font-family: 'Alegreya Sans', sans-serif;
  padding: ${({ padding }) => padding || '1px 1px 3px 1px'};
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
  margin: ${({ m }) => m || '0px'};
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

const StyledForm = styled(Form)`
  > label {
    display: block;
    padding: 15px 0px 5px 0px;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.7);
  }
  > input {
    width: 100%;
    padding: 7px;
    ${media.phone`
      padding: 5px 0px 5px 5px;
      width: 97%;
    `};
    font-family: 'Open Sans', sans-serif;
    border-radius: 3px;
    border: solid 1px rgba(0, 0, 0, 0.27);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 1.5;
    margin-top: ${({ mtop }) => mtop || '0px'};
    &:focus {
      border: solid 1px red;
      box-shadow: 0 0 0 0.2rem rgba(179, 0, 0, 0.3);
    }
  }
  > select {
    width: 103%;
    padding: 7px;
    ${media.phone`
      padding: 5px 0px;
      width: 100%;
    `};
    font-family: 'Open Sans', sans-serif;
    border-radius: 3px;
    border: solid 1px rgba(0, 0, 0, 0.27);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    line-height: 1.5;
    &:focus {
      border: solid 1px red;
      box-shadow: 0 0 0 0.2rem rgba(179, 0, 0, 0.3);
    }
  }
  > button {
    background: none;
    border: solid 1px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    padding: 10px 50px;
    color: rgba(0, 0, 0, 0.6);
    margin: 30px 0px;
    border-radius: 3px;
    transition: all 0.15s ease-in-out;
    border: solid 1px rgba(179, 0, 0, 0.7);
    color: rgba(179, 0, 0, 0.7);
    &:hover {
      color: white;
      background: rgba(179, 0, 0, 0.7);
    }
    &:disabled {
      opacity: 0.5;
    }
  }
  > button[type='button'] {
    margin-left: 20px;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 100%;
  text-align: ${({ center }) => (center ? 'center' : 'auto')};
  max-width: ${({ w }) => w || '500px'};
  margin: ${({ m }) => m || '0px auto'};
  padding: ${({ padding }) => padding || 'auto'};
`;

const BorderWrapper = styled.div`
  width: 100%;
  max-width: ${({ w }) => w || '500px'};
  margin: ${({ m }) => m || '0px auto'};
  padding: ${({ p }) => p || '0px'};
  border: ${({ bor }) => bor || '1px solid #ddd'};
  overflow-x: ${({ oflowx }) => oflowx || 'none'};
  overflow-y: ${({ oflowy }) => oflowy || 'none'};
  height: ${({ h }) => h || 'auto'};
`;

const FormError = styled.p`
  color: red;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
`;

const FlexHorizontal = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const AlignCenter = styled.div`
  text-align: center;
  margin: ${({ m }) => m || '0 px'};
`;

const HR = styled.hr`
  width: ${({ w }) => w || '50vw'};
  margin: ${({ m }) => m || '0 auto'};
  opacity: ${({ opa }) => opa || '1'};
`;

const FlexResponsiveStack = Flex.extend`
  ${media.phone`
    flex-direction: column;
  `};
`;

const SVG = styled.svg`
  height: ${({ height }) => height || '45px'};
  padding: ${({ padding }) => padding || '0px'};
  width: auto;
  border-radius: ${({ circle }) => circle || '0px'};
  background: ${({ bg }) => bg || 'none'};
  box-shadow: ${({ bs }) => bs || 'none'};
  fill: ${({ fill }) => fill || 'auto'};
  transition: all 0.3s ease;
  &:hover {
    box-shadow: ${({ hovBs }) => hovBs || 'auto'};
    transform: ${({ hovTransform }) => hovTransform || 'auto'};
  }
`;

const FlexEnd = Flex.extend`
  justify-content: flex-end;
  width: 100%;
`;

const Loader = styled.div`
  height: 100%;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.7);
`;

const Warn = styled.div`
  height: 100%;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  font-size: 25px;
  color: rgba(0, 0, 0, 0.7);
  padding: ${({ padding }) => padding || 'auto'};
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 7px;
  ${media.phone`
    padding: 5px 0px 5px 5px;
    width: 97%;
  `};
  font-family: 'Open Sans', sans-serif;
  border-radius: 3px;
  border: solid 1px rgba(0, 0, 0, 0.27);
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  line-height: 1.5;
  margin-top: ${({ mtop }) => mtop || '0px'};
  &:focus {
    border: solid 1px red;
    box-shadow: 0 0 0 0.2rem rgba(179, 0, 0, 0.3);
  }
`;

export {
  H1,
  H2,
  H2Res,
  H3,
  H4,
  A,
  HR,
  Container,
  Button,
  Flex,
  FlexCenter,
  FlexItem,
  FlexEnd,
  Page,
  ButtonLink,
  StyledForm,
  FormWrapper,
  FormError,
  FlexHorizontal,
  AlignCenter,
  FlexResponsiveStack,
  Wrapper,
  BorderWrapper,
  SVG,
  H2ResAuto,
  Loader,
  Warn,
  StyledInput,
};
