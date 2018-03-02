import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import media from 'theme/media';

//  Component
import MadeBy from './MadeBy/MadeBy';
import Social from './Social/Social';
import Links from './Links/Links';

const Div = styled.div`
  ${media.phone`
    margin-bottom: 50px;
  `};
`;

const Footer = ({ admin }) => (
  <Div>
    <Links admin={admin} />
    <Social />
    <MadeBy />
  </Div>
);

const mapStateToProps = (state) => ({
  admin: state.auth.admin,
});

export default connect(mapStateToProps)(Footer);
