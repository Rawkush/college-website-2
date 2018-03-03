import React from 'react';
import styled from 'styled-components';
import media from 'theme/media';

// Components
import LinksListItem from './LinksListItem';

const Wrapper = styled.div`
  ${media.phone`
    text-align: center;
    margin-bottom: 16px;
  `};
`;

export default ({ linkedProfiles } = {}) => (
  <div>
    {linkedProfiles ? (
      <Wrapper>
        {linkedProfiles.map((linkedProfile) => (
          <LinksListItem key={linkedProfile._id} {...linkedProfile} />
        ))}
      </Wrapper>
    ) : (
      <p>Loading...</p>
    )}
  </div>
);
