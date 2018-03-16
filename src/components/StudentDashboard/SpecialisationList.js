import React from 'react';
import styled from 'styled-components';

import { ButtonLink, Warn, Loader } from 'theme/Components';
import { Title, HR, WrapperEnd } from './Shared.styles';

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export default ({ specialisation, edit } = {}) => (
  <div>
    <Wrapper>
      {specialisation ? (
        <div>
          {!specialisation.length ? (
            edit && (
              <Warn padding="50px 0px 0px 0px">
                There are no specialisation you added yet.
              </Warn>
            )
          ) : (
            <div>
              <Title>Specialisation</Title>
              {specialisation.map((elem) => <p key={elem}>{elem}</p>)}
            </div>
          )}
        </div>
      ) : (
        <Loader>Loading...</Loader>
      )}
    </Wrapper>
    {edit && (
      <WrapperEnd>
        <ButtonLink to="/student/myprofile/updatespecialisation">
          Update
        </ButtonLink>
      </WrapperEnd>
    )}
    {!!specialisation.length && <HR />}
  </div>
);
