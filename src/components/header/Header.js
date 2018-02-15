import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from './NavBar/NavBar';

// Importing Styled Components
import {
  H1,
  Container,
  Button,
  Flex,
  FlexCenter,
  Page,
} from './../../theme/Components';

// Styles

const FixedHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background: #fff;
  z-index: 100;
`;

const Links = () => (
  <div>
    <NavLink to="/" activeClassName="is-active" exact>
      Home
    </NavLink>
    <br />
    <NavLink to="/syllabus/new/it" activeClassName="is-active" exact>
      Syllabus - I.T. (New)
    </NavLink>
    <br />
    <NavLink to="/syllabus/new/civil" activeClassName="is-active" exact>
      Syllabus - Civil (New)
    </NavLink>
    <br />
    <NavLink to="/syllabus/new/env" activeClassName="is-active" exact>
      Syllabus - Env (New)
    </NavLink>
    <br />
    <NavLink to="/syllabus/old/it" activeClassName="is-active" exact>
      Syllabus - I.T. (old)
    </NavLink>
    <br />
    <NavLink to="/syllabus/old/civil" activeClassName="is-active" exact>
      Syllabus - Civil (old)
    </NavLink>
    <br />
    <NavLink to="/syllabus/old/env" activeClassName="is-active" exact>
      Syllabus - Env (old)
    </NavLink>
    <br />
    <NavLink to="/timetable/even" activeClassName="is-active" exact>
      Time Table - Even
    </NavLink>
    <br />
    <NavLink to="/timetable/odd" activeClassName="is-active" exact>
      Time Table - Odd
    </NavLink>
    <br />
    <NavLink to="/events" activeClassName="is-active" exact>
      Events
    </NavLink>
    <br />
    <NavLink to="/student/myprofile" activeClassName="is-active" exact>
      My Profile
    </NavLink>
    <br />
    <NavLink to="/teacher/register" activeClassName="is-active" exact>
      Teacher Registeration
    </NavLink>
    <br />
    <NavLink to="/teacher/login" activeClassName="is-active" exact>
      Teacher Login
    </NavLink>
    <br />
    <NavLink to="/admin/dashboard" activeClassName="is-active" exact>
      Admin DB
    </NavLink>
    <br />
    <NavLink to="/teacher/myprofile" activeClassName="is-active" exact>
      Teacher Profile
    </NavLink>
  </div>
);

const Header = () => (
  <div>
    <FixedHeader>
      <Container>
        <Flex>
          <H1>Ch. Bramh Prakash Govt. Engg. College</H1>
          <FlexCenter>
            <NavLink to="/login">
              <Button>Login</Button>
            </NavLink>
          </FlexCenter>
        </Flex>
      </Container>
    </FixedHeader>
    <NavBar />
    <Page>
      <Links />
    </Page>
  </div>
);

export default Header;
