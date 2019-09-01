import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  //   onInputChange(event) {
  //     console.log(event.target.value);
  //     this.setState({
  //       term: event.target.value
  //     });
  //   }

  onFormSubmit = event => {
    event.preventDefault();
    //console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              onChange={event => this.setState({ term: event.target.value })}
              value={this.state.term}
            />
            <p>Search with {this.state.term}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
