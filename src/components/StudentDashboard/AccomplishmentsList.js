import React from 'react';
import styled from 'styled-components';
import { Warn, Loader } from 'theme/Components';
// Components
import AccomplishmentsListItem from './AccomplishmentsListItem';

//  Styled Comoponents
const Title = styled.h4`
  margin: 50px 0px;
  font-size: 30px;
  font-family: 'Noto Serif', serif;
  text-align: center;
`;

export default ({ accomplishments, edit } = {}) => (
  <div>
    {accomplishments ? (
      <div>
        {!accomplishments.length ? (
          edit && (
            <Warn padding="50px 0px 0px 0px">
              There are no accomplishments you added!
            </Warn>
          )
        ) : (
          <div>
            <Title>Accomplishments</Title>
            {accomplishments.map((accomplishment) => (
              <AccomplishmentsListItem
                key={accomplishment._id}
                {...accomplishment}
                edit={edit}
              />
            ))}
          </div>
        )}
      </div>
    ) : (
      <Loader>Loading...</Loader>
    )}
  </div>
);
