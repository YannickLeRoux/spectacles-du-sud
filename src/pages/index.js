import React, { Component } from 'react';
import Link from 'gatsby-link';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SearchForm from '../components/search_form';
import EventsList from '../components/events_list';

class IndexPage extends Component {

  state = {
    term: '',
    date: null,
    events: []
  }

  onTermChange(term) {
    this.setState({ term });
  }

  render() {
    const events = this.props.data.allEvent.edges;
    return (
    <Layout>
      <SearchForm
          onTermChange={this.onTermChange.bind(this)}
          value={this.state.term}
        />
        <EventsList
        events={events}
         />
    </Layout>

    );
  }
}

export const query = graphql`
query ComingEvents {
  allEvent(sort: {fields: [dateAndTime], order: ASC}) {
    edges {
      node {
        id
        name
        dateAndTime
        venue
        ticketsLink
        city
        thumbnail {
          id
          url
        }
      }
    }
  }
}`;

export default IndexPage;
