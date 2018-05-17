import React from 'react';

//  Styled Components
import { Container, Wrapper, H3, H4, A } from 'theme/Components';

//  Data
import note from './tenderNote.json';

export default () => (
  <Container>
    <Wrapper>
      <H3>Note -</H3>
      {note.map(({ title, lines, links, emails }, index) => (
        <Wrapper m="20px auto" key="title">
          <H4>
            {index + 1}. {title} -
          </H4>
          {links.map((link) => (
            <Wrapper m="0px 30px">
              <A key={link} href={link}>
                {link}
              </A>
            </Wrapper>
          ))}
          {emails.map((email) => (
            <Wrapper m="0px 30px">
              Email:
              <A key={email} href={`mailto:${email}`}>
                {email}
              </A>
            </Wrapper>
          ))}
          <Wrapper m="0px 30px">{lines.map((line) => <p>{line}</p>)}</Wrapper>
        </Wrapper>
      ))}
    </Wrapper>
  </Container>
);
