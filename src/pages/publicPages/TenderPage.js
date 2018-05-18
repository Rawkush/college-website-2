import React from 'react';
import { connect } from 'react-redux';

//  Styled Components
import { Page, H2ResAuto } from 'theme/Components';

//  Components
import Note from './../../components/static/Tenders/Note';
import TendersList from '../../components/static/Tenders/TendersList';

const TendersPage = ({ tenders }) => (
  <Page>
    <H2ResAuto>Tenders</H2ResAuto>
    <TendersList tendersArray={tenders} />
    <Note />
  </Page>
);

const mapStateToProps = ({ tenders }) => ({
  tenders,
});

export default connect(mapStateToProps)(TendersPage);
