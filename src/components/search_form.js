import React, { Component } from 'react';
import Button from './common/button';

import '../assets/css/SearchForm.css';

class SearchForm extends Component {
  handleChange(e) {
    this.props.onTermChange(e.target.value);
  }
  render() {
    return (
        <form id="search-form">
          <input
            onChange={this.handleChange.bind(this)}
            className="search-input"
            type="text"
            placeholder="Rechercher un artiste..."
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