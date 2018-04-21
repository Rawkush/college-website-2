import React from 'react';
import styled from 'styled-components';
import media from 'theme/media';

const Iframe = styled.iframe`
  border: 0;
  height: 350px;
  width: 100%;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-out;
  ${media.phone`
    height: 255px;    
  `};
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 12px 27px rgba(0, 0, 0, 0.3);
  }
`;

const Map = () => (
  <Iframe
    title="maps"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.1826232840444!2d76.90643951446539!3d28.594297692562495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0df86e89be95%3A0xa130bbe36203a873!2sCh.Brahm+Prakash+Government+Engineering+College!5e0!3m2!1sen!2sin!4v1521742883593&zoom=4"
    width="600"
    height="450"
    frameBorder="0"
    allowFullScreen
  />
);

export default Map;
