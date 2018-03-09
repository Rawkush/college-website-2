import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      error: null,
    };
  }
  fetchResults = ({ target }) => {
    if (target.value) {
      axios
        .post('/s/visitor/searchstudentbyname', { name: target.value })
        .then(({ data }) => this.setState(() => ({ data })))
        .catch((error) => this.setState(() => ({ error })));
    } else {
      this.setState(() => ({ data: null }));
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <input type="text" onKeyUp={this.fetchResults} placeholder="search" />
        {this.state.data &&
          this.state.data.map(
            ({
              name,
              _id,
              rollNo,
              admittedIn,
              dateOfBirth,
              bio,
              photo,
              linkedProfiles,
              slugg,
            }) => (
              <div key={_id}>
                <img height="100px" width="100px" src={photo} alt="profile" />
                <Link to={`/student/${slugg}`}>{name}</Link>
                <p>{rollNo}</p>
                <p>{dateOfBirth}</p>
                <p>{admittedIn}</p>
                <p>{bio}</p>
                {linkedProfiles.map(({ url, provider }) => (
                  <div key={provider}>
                    <a href={url} target="_blank">
                      {provider}
                    </a>
                  </div>
                ))}
              </div>
            )
          )}
      </div>
    );
  }
}

export default Search;
