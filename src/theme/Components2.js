import styled from 'styled-components';
import media from './media';

const TD = styled.td`
  background-color: white;
  color: rgba(0, 0, 0, 0.81);
  padding: 14px 7px;
  text-decoration: none;
  font-weight: 400;
  ${({ title }) => (title ? 'width: 350px' : '')};
  ${media.phone`
    font-size: 14px;
    ${({ title }) => (title ? 'width: 250px' : '')};
  `};
`;

const TR = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TH = styled.th`
  font-family: 'Open Sans', sans-serif;
  border-bottom: 1px solid #ddd;
  background: #f3f3f3;
  padding: 15px 5px;
  text-align: left;
  font-size: 13px;
`;

export { TD, TR, StyledTable, TH };
