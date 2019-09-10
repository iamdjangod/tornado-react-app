import React, { Component } from 'react';
import axios from 'axios';

import { API_HOST } from '../api/config';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      current_time: ''
    };
  }

  componentDidMount() {
    this.getCurrentTime();
}

getCurrentTime = async () => {
  try {
      let currentTime = await axios.get(`${API_HOST}/`, {
      });
      this.setState({
        current_time: currentTime.data.message
      });
  }
  catch {
      this.setState({ error: true });
  }
}

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  };
  render() {
    return (
      <div className="ui segment">
        <div className="field">
           <h3>Current Time : <strong>{this.state.current_time}</strong></h3>
          </div>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Search Similar Documents</label>
            <input
              type="text"
              onChange={event => this.setState({ text: event.target.value })}
              value={this.state.text}
            />
            <p>Search with {this.state.text} and hit enter</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
