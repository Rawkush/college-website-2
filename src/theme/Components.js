import styled from 'styled-components';

const H1 = styled.h1`
  font-family: 'Noto Serif', serif;
  font-size: 1.6rem;
  font-weight: 400;
  flex-grow: 20;
`;

const Container = styled.div`
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
  @media (max-width: 700px) {
    width: 100%;
    padding: 0 5px;
  }
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
`;

const Flex = styled.div`
  display: flex;
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexItem = styled.div`
  flex: 1;
  text-align: center;
`;

const Page = styled.div`
  margin-top: 92px;
  font-family: monospace;
`;

export { H1, Container, Button, Flex, FlexCenter, FlexItem, Page };
