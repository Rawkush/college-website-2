import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Box = styled.div`
  text-decoration: none;
  display: flex;
  margin: 0 auto;
  max-width: 500px;
  border-radius: 3px;
  background: #f3f3f3;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  color: rgba(0, 0, 0, 0.9);
  transition: all 0.2s cubic-bezier(0.39, 0.58, 0.57, 1);
  padding: 10px;
  &:hover {
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.3);
  position: relative;
  top: -60px;
  flex: 1;
`;

export const Input = styled.input`
  display: block;
  margin: 0 auto;
  width: 94%;
  max-width: 600px;
  padding: 10px;
  margin: 30px auto;
  padding: 10px;
  line-height: 1.5;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

export const Wrapper1 = styled.div`
  margin-top: 67px;
`;

export const Wrapper2 = styled.div`
  padding-left: 10px;
  flex: 4;
`;

export const Name = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-family: 18px;
  color: rgba(0, 0, 0, 0.9);
`;

export const Bio = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  margin: 10px 0px 0px 0px;
  color: rgba(0, 0, 0, 0.7);
`;

export const RollNo = styled.div`
  font-family: 'Noto Serif', sans-serif;
  font-size: 15px;
  margin: 10px 0px 0px 0px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Year = styled.div`
  font-family: 'Noto Serif', sans-serif;
  font-size: 15px;
  margin: 10px 0px 0px 0px;
  color: rgba(0, 0, 0, 0.7);
`;
export const Branch = styled.div`
  font-family: 'Alegreya Sans', sans-serif;
  font-size: 17px;
  margin: 10px 0px 0px 0px;
  color: rgba(0, 0, 0, 0.7);
`;

export const Wrapper3 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const LinksWrapper = styled.div`
  flex: 2;
`;

export const SearchWrapper = styled.div`
  padding: 10px 10px 40px 10px;
`;
