import React from 'react';
import styled from 'styled-components';
import media from 'theme/media';

const Iframe = styled.iframe`
  border: 0;
  height: 450px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  ${media.phone`
    height: 450px;    
  `};
`;

export default () => (
  <Iframe
    title="facebook"
    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcbpgecj%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
    width="340"
    height="500"
    scrolling="no"
    frameBorder="0"
    allowtransparency="true"
  />
);
