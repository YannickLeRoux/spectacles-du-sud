import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/EventsList.css';

const Event = ({ id, name, thumbnail, dateAndTime, venue, ticketsLink }) => {

  const formatTime = new Date(dateAndTime);
  const options = { hour:'2-digit', minute:'2-digit' };

  const time = formatTime.toLocaleTimeString('fr-FR', options);

  return (
    <div className="single-event">
      <img src={thumbnail.url} alt="event thumbnail" className="single-event-thumbnail" />
      <div className="single-event-details">
        <h3 className="single-event-artist">{name}</h3>
        <h4 className="single-event-time"><FontAwesomeIcon icon={faClock}/>  {time}</h4>
        <h4 className="single-event-venue"><FontAwesomeIcon icon={faMapMarkerAlt}/>  {venue}</h4>
        <button className="single-event-tickets-button"><a href={ticketsLink} className="single-event-tickets">Acheter une place</a></button>
      </div>
    </div>
  );
};

export default Event;