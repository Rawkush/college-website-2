import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Lightbox from 'react-images';

//  Styled default components
import { Page, Container, Warn, Loader } from 'theme/Components';
import media from 'theme/media';

//  Components
import StudentPhoto from './../../components/StudentDashboard/Photo';
import StudentPrimaryInfo from './../../components/StudentDashboard/PrimayInfo';
import LinksList from './../../components/StudentDashboard/LinksList';
import AccomplishmentsList from './../../components/StudentDashboard/AccomplishmentsList';
import ProjectList from './../../components/StudentDashboard/ProjectsList';
import SpecialisationList from './../../components/StudentDashboard/SpecialisationList';

const Background = styled.div`
  background: #efefef;
  padding-bottom: 10px;
`;

const Wrapper1 = styled.div`
  display: flex;
  padding: 25px 0px 0px 0px;
  align-items: center;
  ${media.phone`
    flex-direction: column;
  `};
`;

class StudentProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
      slugg: this.props.match.params.slugg,
      lightboxIsOpen: false,
    };
  }

  componentWillMount() {
    axios
      .post('/s/visitor/getstudent', { slugg: this.state.slugg })
      .then(({ data }) => this.setState(() => ({ data })))
      .catch((error) => this.setState(() => ({ error })));
  }

  openImage = () => {
    this.setState(() => ({ lightboxIsOpen: true }));
  };

  closeImage = () => {
    this.setState(() => ({ lightboxIsOpen: false }));
  };

  render() {
    if (!this.state.data) {
      return (
        <Page>
          <Container>
            <Loader>Loading ...</Loader>
          </Container>
        </Page>
      );
    }
    return (
      <Page mt="68px">
        {this.state.data ? (
          <div>
            {this.state.error && <p>{this.state.error}</p>}
            {this.state.data && (
              <Lightbox
                images={[
                  {
                    src: this.state.data.photo.replace(/sz=50/, 'sz=500'),
                  },
                ]}
                isOpen={this.state.lightboxIsOpen}
                onClose={this.closeImage}
              />
            )}
            <Background>
              <Container>
                <Wrapper1>
                  <StudentPhoto
                    {...this.state.data}
                    clickHandler={this.openImage}
                  />
                  <StudentPrimaryInfo {...this.state.data} />
                </Wrapper1>
                <LinksList {...this.state.data} />
              </Container>
            </Background>
            <Container>
              {this.state.data ? (
                <div>
                  {(this.state.data.accomplishments &&
                    this.state.data.accomplishments.length) ||
                  (this.state.data.specialisation &&
                    this.state.data.specialisation.length) ||
                  (this.state.data.projects &&
                    this.state.data.projects.length) ? (
                    <div>
                      <SpecialisationList {...this.state.data} />
                      <AccomplishmentsList {...this.state.data} />
                      <ProjectList {...this.state.data} />
                    </div>
                  ) : (
                    <Warn padding="50px 0px"> Nothing to show here.</Warn>
                  )}
                </div>
              ) : (
                <Loader>Loading ...</Loader>
              )}
            </Container>
          </div>
        ) : (
          <Loader>Loading ...</Loader>
        )}
      </Page>
    );
  }
}

export default StudentProfilePage;
