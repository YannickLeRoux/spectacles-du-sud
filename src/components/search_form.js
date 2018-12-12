import React, { Component } from 'react';
import Button from './common/button';

import '../assets/css/SearchForm.css';

class SearchForm extends Component {
  handleChange(e) {
    this.props.onTermChange(e.target.value);
  }
  render() {
    return (
        <form id="search-form"
          onSubmit={this.props.handleSubmit}
        >
          <input
            onChange={this.handleChange.bind(this)}
            className="search-input"
            type="text"
            placeholder="Recherchez un artiste, une salle de concert..."
            value ={this.props.value}
            />

          <Button className="search-button">
            Rechercher
          </Button>
        </form>

    );

  }
};

export default SearchForm;