import React, { Component } from 'react';
import Link from 'gatsby-link';
import Calendar from 'react-calendar';
import { graphql, StaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SearchForm from '../components/search_form';
import EventsList from '../components/events_list';

class IndexPage extends Component {

  state = {
    term: '',
    date: null,
    events: [],
    displayedEvents: []
  }


  onTermChange(term) {
    this.setState({ term });
  }

  componentWillMount() {
    console.log('data', this.props.data.allEvent)
    const events = this.props.data.allEvent.edges;
    this.setState({ events });
    this.setState({ displayedEvents: events})

  }

  handleSubmit = (e) => {
    e.preventDefault();
    if ( this.state.term ) {
      const events = this.props.data.allEvent.edges;
      let filterResult = events.filter( show => show.node.name.toLowerCase().includes(this.state.term.toLowerCase()));
      this.setState({ displayedEvents: filterResult });
    }
    this.setState({displayedEvents: events })
  }

  render() {
    return (
    <Layout>
      <SearchForm
          onTermChange={this.onTermChange.bind(this)}
          value={this.state.term}
          handleSubmit={this.handleSubmit}
        />

        <Calendar
          onChange={date => this.setState({ date })}
          value={this.state.date}

        />

          <EventsList
          events={this.state.displayedEvents}
           />


    </Layout>

    );
  }
}

export const AllEventsQuery = graphql`
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
