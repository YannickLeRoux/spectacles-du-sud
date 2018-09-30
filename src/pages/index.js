import React, { Component } from 'react';
import Link from 'gatsby-link';
import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SearchForm from '../components/search_form';
import EventsList from '../components/events_list';

class IndexPage extends Component {

  state = {
    term: '',
    date: null,
  }


  onTermChange(term) {
    this.setState({ term });
  }

  render() {
    return (
    <Layout>
      <SearchForm
          onTermChange={this.onTermChange.bind(this)}
          value={this.state.term}
        />
        <StaticQuery
          query={graphql`
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
          }`
          }
          render={ data => (
            <EventsList
            events={data.allEvent.edges}
             />
          )}
         />
    </Layout>

    );
  }
}

export default IndexPage;
