import { injectGlobal } from 'styled-components';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Alegreya+Sans|Noto+Serif|Open+Sans|Roboto|Satisfy');
  body: {
    margin: 0;
    padding: 0;
    margin-top: 92px;
    font-size: 15px;  
    font-family: Roboto;
    @media (max-width: 700px) {
      font-size: 10px;
    }
    > a {
      color: blue;
      text-decoration: none;
    }
  }

`;
