import React, { Component } from 'react';
import Event from './event';

export default class DailyEvents extends Component {
  render() {
    return (

      <React.Fragment>
        {this.props.events.map( show => (
          <Event
            key={show.node.id}
            id={show.node.id}
            name={show.node.name}
            dateAndTime={show.node.dateAndTime}
            venue={show.node.venue}
            city={show.node.city}
            thumbnail={show.node.thumbnail}
            ticketsLink={show.node.ticketsLink}
           />
        ))}

      </React.Fragment>
    )
  }
}
