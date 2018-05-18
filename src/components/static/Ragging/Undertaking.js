import React from 'react';
import { A, H3, Container, Wrapper } from 'theme/Components';

const links = [
  {
    name:
      "Undertaking from the students, as per the provisions of Anti-ragging verdict by the Hon'ble Supreme Court of India.", // eslint-disable-line
    link: 'http://gecdelhi.ac.in/pdf_files/undertaking%201.pdf',
  },
  {
    name: 'Affidavit to be submitted by the Parent/Guardian of the student',
    link: 'http://gecdelhi.ac.in/pdf_files/undertaking%202.pdf',
  },
];

export default () => (
  <Container>
    <Wrapper w="900px" m="50px auto">
      <H3>Undertaking</H3>
      {links.map(({ link, name }) => (
        <div key={link}>
          <A mar="10px auto" href={link} target="_blank">
            {name}
          </A>
        </div>
      ))}
    </Wrapper>
  </Container>
);
