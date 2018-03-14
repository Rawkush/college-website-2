import React, { Component } from 'react';
import axios from 'axios';
import Result from './SearchResult';
import { Input, SearchWrapper } from './Styles';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      student: null,
      // teacher: null,
      error: null,
    };
  }
  fetchResults = ({ target }) => {
    if (target.value || target.value !== '') {
      axios
        .post('/s/visitor/searchstudentbyname', { name: target.value })
        .then(({ data }) => this.setState(() => ({ student: data })))
        .catch((error) => this.setState(() => ({ error })));
    } else {
      this.setState(() => ({ data: null }));
    }
  };

  render() {
    return (
      <SearchWrapper>
        {this.state.error && <p>{this.state.error}</p>}
        <Input type="text" onKeyUp={this.fetchResults} placeholder="search" />
        {this.state.student &&
          this.state.student.map((res) => <Result key={res._id} {...res} />)}
      </SearchWrapper>
    );
  }
}

export default Search;
