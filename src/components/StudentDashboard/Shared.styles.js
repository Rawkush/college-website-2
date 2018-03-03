import styled from 'styled-components';
import media from 'theme/media';

const Title = styled.h4`
  margin: 50px 0px;
  font-size: 30px;
  font-family: 'Noto Serif', serif;
  text-align: center;
`;

const HR = styled.hr`
  width: ${({ width }) => width || '50vw'};
  margin: 0 auto;
`;

const WrapperEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  ${media.phone`
    justify-content: ${({ center }) => (center ? 'center' : 'flex-end')};
  `};
`;

export { Title, HR, WrapperEnd };
