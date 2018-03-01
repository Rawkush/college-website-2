import React from 'react';
import { connect } from 'react-redux';

//  Component
import MadeBy from './MadeBy/MadeBy';
import Social from './Social/Social';
import Links from './Links/Links';

const Footer = ({ admin }) => (
  <div>
    <Links admin={admin} />
    <Social />
    <MadeBy />
  </div>
);

const mapStateToProps = (state) => ({
  admin: state.auth.admin,
});

export default connect(mapStateToProps)(Footer);
