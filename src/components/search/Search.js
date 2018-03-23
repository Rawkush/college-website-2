import React, { Component } from 'react';
import axios from 'axios';
import { Loader } from 'theme/Components';
import Result from './SearchResult';
import { Input, SearchWrapper } from './Styles';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initial: true,
      student: [],
      // teacher: null,
      error: null,
      loading: false,
    };
  }
  fetchResults = ({ target }) => {
    if (target.value && target.value !== '') {
      this.setState(() => ({ loading: true, initial: false }));
      axios
        .post('/s/visitor/searchstudentbyname', { name: target.value })
        .then(({ data }) =>
          this.setState(() => ({ student: data, loading: false }))
        )
        .catch((error) => this.setState(() => ({ error, loading: false })));
    } else {
      this.setState(() => ({ student: [], loading: false, initial: true }));
    }
  };

  render() {
    return (
      <SearchWrapper>
        {this.state.error && <p>{this.state.error}</p>}
        <Input type="text" onKeyUp={this.fetchResults} placeholder="search" />
        {this.state.loading && <Loader>Loading...</Loader>}
        {this.state.student.map((res) => <Result key={res._id} {...res} />)}
        {!this.state.student.length &&
          !this.state.initial &&
          !this.state.loading && <Loader>No Results...</Loader>}
        {this.state.initial && (
          <Loader>Start Typing the name of the student</Loader>
        )}
      </SearchWrapper>
    );
  }
}

export default Search;
