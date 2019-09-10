import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

import { API_HOST } from '../api/config';

class App extends Component {
  state = {
    searchResults: [],
    text: ''
  };

  onSearchSubmit = async text => {
        axios.post(
          API_HOST + '/recommendations', 
          text,
  )
  .then((res) => {
    console.log("AXIOS RESPONSE: ", res.data.results);
    this.setState({
      searchResults: res.data.results
    });
  })
  .catch((err) => {
    console.log("AXIOS ERROR: ", err);
  });
}
  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <SearchList searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
