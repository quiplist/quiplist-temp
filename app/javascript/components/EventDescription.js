import React  from 'react';
import PropTypes from "prop-types";

class EventDescription extends React.Component {

  render() {

    return (
      <div className="event-description">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8 event-description--content">
            <h5>Event</h5>
            <p>{this.props.currentEvent.description}</p>
            {this.props.hasBrochure ? (
              <a className="" href={this.props.currentEvent.brochure_url} target="_blank">
                <label className="event_brochure_btn">
                  Click here to download<i className="fas fa-download"></i>
                </label>
              </a>)
              : "" }

          </div>
          <div className="col-12 col-md-12 col-lg-4 event-description--number">
            <h3 className="currentNumber">{this.props.raffleId}</h3>
            <h4> You are # </h4>
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}

export default EventDescription
