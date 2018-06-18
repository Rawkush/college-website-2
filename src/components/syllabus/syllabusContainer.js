import React, { Component } from 'react';
import styled from 'styled-components';
import { Wrapper, H2ResAuto } from 'theme/Components';
// Components
import SyllabusListItem from './syllabusListItem';
import { filterSyllabus, periodFilter } from './Utils';

const H4 = styled.h4`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  padding: 18px;
  cursor: pointer;
  font-weight: 400;
  border: solid 1px rgba(0, 0, 0, 0.08);
  margin: 0;
  transition: background 0.1s ease;
  &:hover {
    background: rgba(243, 243, 243, 0.45);
  }
`;

class Syllabus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      syllabusArray: this.props.syllabusArray,
      params: this.props.match.params,
      auth: this.props.auth,
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      active6: false,
      active7: false,
      active8: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      syllabusArray: nextProps.syllabusArray,
      params: nextProps.match.params,
    }));
  }

  returnTitle = (branch) => {
    switch (branch) {
      case 'it':
        return 'Information Techonolgy';
      case 'env':
        return 'Environment';
      case 'civil':
        return 'Civil';
      default:
        break;
    }
    return null;
  };

  handleGenerator = (active) => () => {
    if (this.state[active]) {
      this.setState(() => ({ [active]: false }));
    } else {
      this.setState(() => ({
        active1: false,
        active2: false,
        active3: false,
        active4: false,
        active5: false,
        active6: false,
        active7: false,
        active8: false,
        [active]: true,
      }));
    }
  };

  clickHandler1 = this.handleGenerator('active1');
  clickHandler2 = this.handleGenerator('active2');
  clickHandler3 = this.handleGenerator('active3');
  clickHandler4 = this.handleGenerator('active4');
  clickHandler5 = this.handleGenerator('active5');
  clickHandler6 = this.handleGenerator('active6');
  clickHandler7 = this.handleGenerator('active7');
  clickHandler8 = this.handleGenerator('active8');

  render() {
    const syllabusFiltered = periodFilter(
      this.state.syllabusArray,
      this.state.params
    );
    const syllSem1 = filterSyllabus(syllabusFiltered, 1, this.state.params);
    const syllSem2 = filterSyllabus(syllabusFiltered, 2, this.state.params);
    const syllSem3 = filterSyllabus(syllabusFiltered, 3, this.state.params);
    const syllSem4 = filterSyllabus(syllabusFiltered, 4, this.state.params);
    const syllSem5 = filterSyllabus(syllabusFiltered, 5, this.state.params);
    const syllSem6 = filterSyllabus(syllabusFiltered, 6, this.state.params);
    const syllSem7 = filterSyllabus(syllabusFiltered, 7, this.state.params);
    const syllSem8 = filterSyllabus(syllabusFiltered, 8, this.state.params);
    return (
      <Wrapper w="700px" m="150px auto 0px auto">
        <H2ResAuto>{this.returnTitle(this.state.params.sub)}</H2ResAuto>
        <H4 onClick={this.clickHandler1}> Semester I</H4>
        <SyllabusListItem
          active={this.state.active1}
          syllabus={syllSem1}
          auth={this.state.auth}
        />
        <H4 onClick={this.clickHandler2}> Semester II</H4>
        <SyllabusListItem
          active={this.state.active2}
          syllabus={syllSem2}
          auth={this.state.auth}
        />
        <H4 onClick={this.clickHandler3}> Semester III</H4>
        <SyllabusListItem
          active={this.state.active3}
          syllabus={syllSem3}
          auth={this.state.auth}
        />
        <H4 onClick={this.clickHandler4}> Semester VI</H4>
        <SyllabusListItem
          active={this.state.active4}
          syllabus={syllSem4}
          auth={this.state.auth}
        />
        <H4 onClick={this.clickHandler5}> Semester V</H4>
        <SyllabusListItem
          active={this.state.active5}
          syllabus={syllSem5}
          auth={this.state.auth}
        />
        <H4 onClick={this.clickHandler6}> Semester VI</H4>
        <SyllabusListItem
          active={this.state.active6}
          syllabus={syllSem6}
          auth={this.state.auth}
        />
        <H4 onClick={this.clickHandler7}> Semester VII</H4>
        <SyllabusListItem
          active={this.state.active7}
          syllabus={syllSem7}
          auth={this.state.auth}
        />
        <H4 onClick={this.clickHandler8}> Semester VIII</H4>
        <SyllabusListItem
          active={this.state.active8}
          syllabus={syllSem8}
          auth={this.state.auth}
        />
      </Wrapper>
    );
  }
}

export default Syllabus;
