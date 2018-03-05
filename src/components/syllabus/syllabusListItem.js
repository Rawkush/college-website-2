import React from 'react';
import styled from 'styled-components';
import { H4 } from 'theme/Components';
import SyllabusListItemTable from './syllabusListItemTable';

const Wrapper = styled.div`
  display: block;
  padding: ${({ active }) => (active ? '15px' : '0 15px')};
  border: none;
  ${({ active }) => (active ? 'border: solid 1px rgba(0, 0, 0, 0.08);' : null)};
  height: ${({ active }) => (active ? 'auto' : '0')};
  overflow: hidden;
  transition: height 0.3s linear, padding 0.1s linear;
`;

const SyllabusListItem = ({ syllabus, auth, active }) => {
  const thoerySyllabus = syllabus.filter((item) => item.type === 'theory');
  const practicalSyllabus = syllabus.filter(
    (item) => item.type === 'practical'
  );

  return (
    <Wrapper active={active}>
      <H4 margin="0px 0px 10px 0px">Theory</H4>
      <SyllabusListItemTable syllabus={thoerySyllabus} auth={auth} />
      <H4 margin="15px 0px 10px 0px">Practical / Viva Voce</H4>
      <SyllabusListItemTable syllabus={practicalSyllabus} auth={auth} />
    </Wrapper>
  );
};

export default SyllabusListItem;
