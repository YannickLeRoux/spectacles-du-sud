import React, { Component } from 'react';
import DailyEvents from './daily_events';

export default class DailyEventsList extends Component {
  render() {
    console.log('events', this.props.events);
    const formatDate = new Date(this.props.date);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const frenchDate = formatDate.toLocaleDateString('fr-FR', options);

    return (
      <div className="daily-events">
        <h2>{frenchDate}</h2>
        <hr className="hr-bold"/>
        <DailyEvents events={this.props.events} />

      </div>
    )
  }
}
