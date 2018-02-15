import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
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
