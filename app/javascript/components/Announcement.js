import React  from 'react';
import PropTypes from "prop-types";

class Announcement extends React.Component {

  displayAnnouncement = () => {
    let display = false;
    if (this.props.announcements.length > 0) {
      display = true
    }
    return display;
  }
  announcement = () => {
    let message = "";
    
    if(this.props.currentAnnouncement !== undefined) {
      message = this.props.currentAnnouncement.message;
    }

    return message;
  }

  render() {
    return (

      <div className="announcement">
        <div className="row">
          <div className="col-12">
          {this.displayAnnouncement() ? (<marquee>{this.announcement()}</marquee>) : "" }
          </div>
        </div>
      </div>
    )
  }
}

export default Announcement
