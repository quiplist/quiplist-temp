import React  from 'react';
import PropTypes from "prop-types";

class EventDescription extends React.Component {

  render() {

    return (
      <div className="event-description">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8 event-description--content">
            <h5>Event Description</h5>
            <p>{this.props.eventDescription}</p>
          </div>
          <div className="col-12 col-md-12 col-lg-4 event-description--number">
            <h3 className="currentNumber">{this.props.currentUserId}</h3>
            <h4> You are # </h4>
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}

EventDescription.propTypes = {
  eventDescription: PropTypes.string,
  currentUserId: PropTypes.number
};

export default EventDescription
