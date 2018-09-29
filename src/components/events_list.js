import React, { Component } from 'react';
import _ from 'lodash';

import DailyEventsList from './daily_events_list';

export default class EventsList extends Component {

  render() {
    const dates = this.props.events.reduce((list, show) => {
      list.push(show.node.dateAndTime);
      return _.uniqWith(list, (arrVal, othVal) => arrVal.slice(0,10) === othVal.slice(0,10));
    }, []);

    console.log('dates:', dates);
    return (
      <section className="events-list">
        { dates.map( date => (
          <DailyEventsList
            key={date}
            date={date}
            events={this.props.events.filter((show)=> show.node.dateAndTime.slice(0,10) === date.slice(0,10) )} />
        )) }
      </section>
    )
  }
}